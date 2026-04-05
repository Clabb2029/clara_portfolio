import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import JungleBackground from '@/components/JungleBackground';
import LanguageSwitch from '@/components/LanguageSwitch';
import ScrollIndicator from '@/components/ScrollIndicator';
import SEO from '@/components/SEO';
import Technologies from '@/components/Technologies';
import { Leaf, LeafyGreen } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

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
                        <Link
                            href="#experiences"
                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            {t('ctaProjects')}
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {t('ctaContact')}
                        </Link>
                    </div>
                    <ScrollIndicator />
                </div>

                <div className="relative bg-black/40 backdrop-blur-sm">
                    <Technologies />
                    <About />
                    <Experiences />
                    <ContactForm />
                    <Footer />
                </div>
            </div>
        </>
    );
}
