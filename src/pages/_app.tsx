import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const locale = (pageProps.locale as string) ?? 'fr';
    const messages = (pageProps.messages as Record<string, unknown>) ?? {};

    return (
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris" now={new Date()}>
            <Component {...pageProps} />
        </NextIntlClientProvider>
    );
}
