/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://clara-slys.fr',
    generateRobotsTxt: true,
    alternateRefs: [
        {
            href: 'https://clara-slys.fr/fr',
            hreflang: 'fr',
        },
        {
            href: 'https://clara-slys.fr/en',
            hreflang: 'en',
        },
    ],
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
    },
};
