import type { Locale } from '@/i18n/locales';
import { SUPPORTED_LOCALES } from '@/i18n/locales';
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: SUPPORTED_LOCALES.map((locale) => ({ params: { locale } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const locale = (params?.locale as Locale) ?? 'fr';
    const messages = (await import(`@/i18n/messages/${locale}.json`)).default;
    return { props: { locale, messages } };
};
