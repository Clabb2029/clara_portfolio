import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
    const locale = (pageProps.locale as string) ?? 'fr';
    const messages = (pageProps.messages as Record<string, unknown>) ?? {};

    return (
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris" now={new Date()}>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} language={locale}>
                <Component {...pageProps} />
            </GoogleReCaptchaProvider>
        </NextIntlClientProvider>
    );
}
