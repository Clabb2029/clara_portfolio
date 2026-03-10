'use client';

import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { FormEvent, useRef, useState } from 'react';

export default function ContactForm() {
    const t = useTranslations('contact');
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        setIsFormDisabled(true);
        e.preventDefault();
        if (!form.current) {
            alert(t('form-not-found'));
            setIsFormDisabled(false);
            return;
        }
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
            )
            .then(
                () => {
                    alert(t('email-sent'));
                    form.current?.reset();
                    setIsFormDisabled(false);
                },
                (error) => {
                    console.error(error);
                    alert(t('email-error'));
                    setIsFormDisabled(false);
                },
            );
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                {t('title')} <span className="text-emerald-400">{t('title2')}</span>
            </h2>

            <form ref={form} onSubmit={sendEmail} className="max-w-9/10 xl:max-w-3/4 mx-auto flex flex-col gap-6 text-white text-start">
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
                        required
                        aria-required="true"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isFormDisabled}
                    className="w-fit mx-auto cursor-pointer px-8 py-3 text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-102 transition-all duration-300"
                >
                    {t('send')}
                </button>
            </form>
        </section>
    );
}
