import SEO404 from '@/components/SEO404';
import { ArrowLeft } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
    const fr = (await import('@/i18n/messages/fr.json')).default;
    const en = (await import('@/i18n/messages/en.json')).default;

    return {
        props: {
            messages: { fr, en },
        },
    };
};

type Messages = {
    'not-found': {
        'seo-title': string;
        'seo-description': string;
        'seo-keywords': string;
        'seo-canonical': string;
        title: string;
        back: string;
        description: string;
        'job-title': string;
    };
};

type Props = {
    messages: {
        fr: Messages;
        en: Messages;
    };
};

export default function NotFound({ messages }: Props) {
    const [locale, setLocale] = useState<'fr' | 'en'>('fr');
    const router = useRouter();

    useEffect(() => {
        const pathLocale = window.location.pathname.split('/')[1];
        if (pathLocale === 'en' || pathLocale === 'fr') {
            setLocale(pathLocale);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace(`/${locale}`);
        }, 5000);
        return () => clearTimeout(timer);
    }, [locale, router]);

    const t = messages[locale]['not-found'];

    return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            <SEO404
                title={t['seo-title']}
                description={t['seo-description']}
                keywords={t['seo-keywords']}
                canonical={t['seo-canonical']}
                jobTitle={t['job-title']}
            />
            <section id="not-found" className="bg-black/40 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
                    <div className="bg-black/40 backdrop-blur-sm">
                        <div className="min-h-screen bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-5 flex flex-col justify-center">
                            <Link
                                href={`/${locale}`}
                                className="w-fit absolute top-5 left-5 px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                <ArrowLeft size={20} />
                                {t['back']}
                            </Link>
                            <div className="max-w-4/5 md:max-w-3/5 lg:max-w-1/2 m-auto bg-black/30 backdrop-blur-sm rounded-2xl p-12 lg:px-32 shadow-lg border border-green-800/30 text-white flex flex-col gap-8">
                                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">{t['title']}</h1>
                                <p className="text-white/50 text-center">{t['description']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NextIntlClientProvider>
    );
}
