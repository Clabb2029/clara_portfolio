import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="antialiased">
                <Script src="https://www.google.com/recaptcha/api.js" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
