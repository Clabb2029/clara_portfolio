import Head from 'next/head';

export default function SEO404({
    title,
    description,
    keywords,
    canonical,
    jobTitle,
}: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    jobTitle: string;
}) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <meta name="keywords" content={`Clara Slys, Développeuse Web, FullStack Developer, Portfolio ${keywords}`} />
            <meta name="author" content="Clara Slys" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="www.clara-slys.fr/" />
            <meta property="og:image" content="www.clara-slys.fr/icons/preview.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="www.clara-slys.fr/icons/preview.png" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'Person',
                                name: 'Clara Slys',
                                jobTitle: { jobTitle },
                                url: 'www.clara-slys.fr',
                                image: 'www.clara-slys.fr/icons/preview.png',
                                sameAs: ['https://github.com/Clabb2029/', 'https://www.linkedin.com/in/clara-slys/'],
                                description: { description },
                            },
                            {
                                '@type': 'WebSite',
                                name: { title },
                                url: 'www.clara-slys.fr',
                                potentialAction: {
                                    '@type': 'SearchAction',
                                    target: 'www.clara-slys.fr/?s={search_term_string}',
                                    'query-input': 'required name=search_term_string',
                                },
                            },
                            {
                                '@type': 'Organization',
                                name: 'Clara Slys',
                                url: 'www.clara-slys.fr',
                                logo: 'www.clara-slys.fr/icons/favicon-512x512.png',
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
