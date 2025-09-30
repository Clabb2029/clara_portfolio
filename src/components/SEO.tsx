import Head from 'next/head';

export default function SEO() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Clara Slys - Développeuse Web FullStack</title>
            <meta name="robots" content="index, follow" />
            <meta
                name="description"
                content="Développeuse web Fullstack spécialisée en JavaScript, Java, Angular et React. Découvrez mes projets et mon univers."
            />

            {/* Basic SEO */}
            <meta
                name="keywords"
                content="Clara Slys, Développeuse Web, FullStack, Portfolio, Contact, Projets, A propos, Technologies, CV"
            />
            <meta name="author" content="Clara Slys" />
            <link rel="canonical" href="https://www.clara-slys.fr" />
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
            <meta property="og:title" content="Clara Slys - Développeuse Web FullStack" />
            <meta
                property="og:description"
                content="Développeuse web Fullstack spécialisée en JavaScript, Java, Angular et React. Découvrez mes projets et mon univers."
            />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.clara-slys.fr/" />
            <meta property="og:image" content="https://www.clara-slys.fr/icons/preview.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Clara Slys - Développeuse Web FullStack" />
            <meta
                name="twitter:description"
                content="Développeuse web Fullstack spécialisée en JavaScript, Java, Angular et React. Découvrez mes projets et mon univers."
            />
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
                                jobTitle: 'Développeuse web FullStack',
                                url: 'https://www.clara-slys.fr',
                                image: 'https://www.clara-slys.fr/icons/preview.png',
                                sameAs: ['https://github.com/Clabb2029/', 'https://www.linkedin.com/in/clara-slys/'],
                                description:
                                    'Développeuse web Fullstack spécialisée en JavaScript, Java, Angular et React. Découvrez mes projets et mon univers.',
                            },
                            {
                                '@type': 'WebSite',
                                name: 'Clara Slys - Développeuse Web FullStack',
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
