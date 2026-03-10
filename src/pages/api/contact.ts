// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const SCORE_THRESHOLD = 0.5; // between 0 (bot) and 1 (human)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { form, recaptchaToken } = req.body;

        // 1. Verify reCAPTCHA
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });

        const recaptchaData = await verifyRes.json();

        if (!recaptchaData.success || recaptchaData.score < SCORE_THRESHOLD || recaptchaData.action !== 'contact_form') {
            return res.status(400).json({ error: 'reCAPTCHA verification failed', score: recaptchaData.score });
        }

        // 2. Send email via EmailJS (REST server side)
        const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                accessToken: process.env.EMAILJS_PRIVATE_KEY,
                template_params: {
                    from_name: form.from_name,
                    company: form.company,
                    from_email: form.from_email,
                    subject: form.subject,
                    message: form.message,
                },
            }),
        });

        if (!emailRes.ok) {
            const text = await emailRes.text().catch(() => '');
            console.error('EmailJS error:', emailRes.status, text);
            return res.status(emailRes.status).json({ error: 'Failed to send email' });
        }
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('API /api/contact error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
