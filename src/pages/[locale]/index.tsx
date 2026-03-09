import About from '@/components/About';
import JungleBackground from '@/components/JungleBackground';
import LanguageSwitch from '@/components/LanguageSwitch';
import ScrollIndicator from '@/components/ScrollIndicator';
import SEO from '@/components/SEO';
import Technologies from '@/components/Technologies';
import type { Locale } from '@/i18n/locales';
import { SUPPORTED_LOCALES } from '@/i18n/locales';
import { Leaf, LeafyGreen } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: SUPPORTED_LOCALES.map((locale) => ({ params: { locale } })),
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const locale = (params?.locale as Locale) ?? 'fr';
    const messages = (await import(`@/i18n/messages/${locale}.json`)).default;
    return { props: { locale, messages } };
};

export default function Home() {
    const t = useTranslations('home');
    return (
        <>
            <SEO />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative text-center">
                <JungleBackground />
                <LanguageSwitch />

                <div className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="relative mx-auto mb-20 px-8 sm:px-16">
                        <div className="absolute -top-10 right-2 size-6 text-white">
                            <Leaf />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                            Clara <span className="text-emerald-400">SLYS</span>
                        </h1>
                        <p className="text-md sm:text-xl md:text-2xl text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {t('subtitle')}
                        </p>
                        <div className="absolute -bottom-2 left-0 size-6 rotate-180 text-emerald-400">
                            <LeafyGreen />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-9/10 xl:max-w-3/4 mx-auto">
                        <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                            {t('ctaProjects')}
                        </button>
                        <button className="px-8 py-3 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
                            {t('ctaContact')}
                        </button>
                    </div>
                    <ScrollIndicator />
                </div>

                <div className="relative z-10 bg-black/40 backdrop-blur-sm">
                    <Technologies />
                    <About />
                </div>
            </div>
        </>
    );
}
