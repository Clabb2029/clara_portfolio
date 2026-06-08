'use client';

import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';

const FormInput = ({
    id,
    type,
    placeholder,
    label,
    name,
    value,
    disabled,
    onChange,
    required,
}: {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    name: string;
    value: string;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="peer w-full bg-transparent border-b border-emerald-deep/40 py-3 focus:outline-none focus:border-emerald-bright transition-colors text-sm placeholder-transparent"
                disabled={disabled}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                aria-required={required ? 'true' : 'false'}
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-0 top-3 text-sm text-paper/40 transition-all
      peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-bright
      peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-emerald-bright"
            >
                {label}
                {required && ' *'}
            </label>
        </div>
    );
};

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
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto bg-emerald-deep/10 rounded-[3rem] p-8 md:p-20 border border-emerald-deep/30">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="font-display text-4xl md:text-5xl leading-tight">
                            {t('title')}
                            <span className="italic text-emerald-bright">{t('title2')}</span>
                        </h2>
                        <p className="text-paper/60 text-sm leading-relaxed max-w-sm">{t('description')}</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-emerald-bright/10 grid place-items-center text-emerald-bright font-mono">
                                    @
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-mono text-emerald-bright tracking-widest">
                                        {t('direct-line')}
                                    </p>
                                    <p className="text-lg">{t('direct-line-content')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-emerald-bright/10 grid place-items-center text-emerald-bright font-mono">
                                    ●
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-mono text-emerald-bright tracking-widest">
                                        {t('availability')}
                                    </p>
                                    <p className="text-lg">{t('availability-content')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 flex gap-6 border-t border-emerald-deep/40">
                            <a
                                href="https://www.linkedin.com/in/clara-slys/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-emerald-bright transition-all"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Clabb2029"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-emerald-bright transition-all"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://gitlab.com/Clara_Slys"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-emerald-bright transition-all"
                            >
                                GitLab
                            </a>
                        </div>
                    </div>

                    <form onSubmit={sendEmail} className="space-y-6">
                        <FormInput
                            id="name"
                            type="text"
                            placeholder={t('name-placeholder')}
                            label={t('name')}
                            name="from_name"
                            value={formData?.from_name}
                            disabled={status === 'loading'}
                            onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                            required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormInput
                                id="company"
                                type="text"
                                placeholder={t('company-placeholder')}
                                label={t('company')}
                                name="company"
                                value={formData?.company}
                                disabled={status === 'loading'}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                            <FormInput
                                id="email"
                                type="email"
                                placeholder={t('email-placeholder')}
                                label={t('email')}
                                name="from_email"
                                value={formData?.from_email}
                                disabled={status === 'loading'}
                                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                                required
                            />
                        </div>
                        <FormInput
                            id="subject"
                            type="text"
                            placeholder={t('subject-placeholder')}
                            label={t('subject')}
                            name="subject"
                            value={formData?.subject}
                            disabled={status === 'loading'}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                        <div className="relative">
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Message *"
                                className="peer w-full bg-transparent border-b border-emerald-deep/40 py-3 focus:outline-none focus:border-emerald-bright transition-colors text-sm placeholder-transparent resize-none"
                                name="message"
                                value={formData?.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={status === 'loading'}
                                required
                                aria-required="true"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="pointer-events-none absolute left-0 top-3 text-sm text-paper/40 transition-all peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-emerald-bright peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-emerald-bright"
                            >
                                Message *
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={isFormDisabled || status === 'loading'}
                            className="group relative px-8 py-4 bg-emerald-bright text-forest font-bold uppercase text-xs tracking-widest rounded-full overflow-hidden transition-all disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('send')}
                                <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:rotate-20 group-hover:-translate-y-1" />
                            </span>
                            <span className="absolute inset-0 bg-paper translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
