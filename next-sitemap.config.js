/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'www.clara-slys.fr',
    generateRobotsTxt: true,
    alternateRefs: [
        {
            href: 'www.clara-slys.fr/fr',
            hreflang: 'fr',
        },
        {
            href: 'www.clara-slys.fr/en',
            hreflang: 'en',
        },
    ],
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
    },
};
