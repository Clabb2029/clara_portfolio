'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const t = useTranslations('contact');
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    const [formData, setFormData] = useState({ from_name: '', company: '', from_email: '', subject: '', message: '' });
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const isFormValid = () => {
        return formData?.from_name && formData?.from_email && formData?.message;
    };

    const sendEmail = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            setIsFormDisabled(true);
            e.preventDefault();

            if (!isFormValid()) {
                toast.error(t('invalid-form'));
                setIsFormDisabled(false);
                return;
            }

            if (!executeRecaptcha) {
                toast.error(t('recaptcha-not-loaded'));
                setIsFormDisabled(false);
                return;
            }
            setStatus('loading');

            try {
                const token = await executeRecaptcha('contact_form');

                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        form: formData,
                        recaptchaToken: token,
                    }),
                });

                if (!res.ok) {
                    throw new Error('Failed to send email');
                }

                toast.success(t('email-sent'));
                setFormData({ from_name: '', company: '', from_email: '', subject: '', message: '' });
                setStatus('success');
                setIsFormDisabled(false);
            } catch (error) {
                console.error(error);
                toast.error(t('email-error'));
                setStatus('error');
                setIsFormDisabled(false);
            }
        },
        [executeRecaptcha, formData],
    );

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                {t('title')} <span className="text-emerald-400">{t('title2')}</span>
            </h2>

            <form onSubmit={sendEmail} className="max-w-9/10 xl:max-w-3/4 mx-auto flex flex-col gap-6 text-white text-start">
                <div className="flex flex-col md:flex-row flex-1 gap-4">
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="name">
                            {t('name')} <span className="red">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('name-placeholder')}
                            className="border-none rounded-lg w-full h-8 bg-white/90 px-1 text-black"
                            name="from_name"
                            disabled={status === 'loading'}
                            value={formData?.from_name}
                            onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="company">{t('company')}</label>
                        <input
                            type="text"
                            id="company"
                            placeholder={t('company-placeholder')}
                            className="border-none rounded-lg w-full h-8 bg-white/90 px-1 text-black"
                            name="company"
                            value={formData?.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            disabled={status === 'loading'}
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="email">
                        {t('email')} <span className="red">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder={t('email-placeholder')}
                        className="border-none rounded-lg w-full h-8 bg-white/90 px-1 text-black"
                        name="from_email"
                        value={formData?.from_email}
                        onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                        disabled={status === 'loading'}
                        required
                        aria-required="true"
                    />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="subject">{t('subject')}</label>
                    <input
                        type="text"
                        id="subject"
                        placeholder={t('subject-placeholder')}
                        className="border-none rounded-lg w-full h-8 bg-white/90 px-1 text-black"
                        name="subject"
                        value={formData?.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        disabled={status === 'loading'}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="message">
                        {t('message')} <span className="red">*</span>
                    </label>
                    <textarea
                        id="message"
                        placeholder={t('message-placeholder')}
                        rows={6}
                        className="border-none rounded-lg w-full bg-white/90 p-1 text-black"
                        name="message"
                        value={formData?.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === 'loading'}
                        required
                        aria-required="true"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isFormDisabled || status === 'loading'}
                    className="w-fit mx-auto cursor-pointer px-8 py-3 text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-102 transition-all duration-300"
                >
                    {t('send')}
                </button>
            </form>
        </section>
    );
}
