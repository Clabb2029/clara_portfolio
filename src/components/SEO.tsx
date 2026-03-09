import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function SEO() {
    const t = useTranslations('seo');
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{t('title')}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={t('description')} />

            {/* Basic SEO */}
            <meta
                name="keywords"
                content="Clara Slys, Développeuse Web, FullStack Developer, Portfolio, Contact, Projets, Projects, A propos, About, Technologies, CV, Resume"
            />
            <meta name="author" content="Clara Slys" />
            <link rel="canonical" href="https://www.clara-slys.fr" />
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
            <meta property="og:title" content={t('title')} />
            <meta property="og:description" content={t('description')} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.clara-slys.fr/" />
            <meta property="og:image" content="https://www.clara-slys.fr/icons/preview.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('title')} />
            <meta name="twitter:description" content={t('description')} />
            <meta name="twitter:image" content="https://www.clara-slys.fr/icons/preview.png" />

            {/* Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'Person',
                                name: 'Clara Slys',
                                jobTitle: t('job-title'),
                                url: 'https://www.clara-slys.fr',
                                image: 'https://www.clara-slys.fr/icons/preview.png',
                                sameAs: ['https://github.com/Clabb2029/', 'https://www.linkedin.com/in/clara-slys/'],
                                description: t('description'),
                            },
                            {
                                '@type': 'WebSite',
                                name: t('title'),
                                url: 'https://www.clara-slys.fr',
                                potentialAction: {
                                    '@type': 'SearchAction',
                                    target: 'https://www.clara-slys.fr/?s={search_term_string}',
                                    'query-input': 'required name=search_term_string',
                                },
                            },
                            {
                                '@type': 'Organization',
                                name: 'Clara Slys',
                                url: 'https://www.clara-slys.fr',
                                logo: 'https://www.clara-slys.fr/icons/favicon-512x512.png',
                                founder: {
                                    '@type': 'Person',
                                    name: 'Clara Slys',
                                },
                            },
                        ],
                    }),
                }}
            />
        </Head>
    );
}
