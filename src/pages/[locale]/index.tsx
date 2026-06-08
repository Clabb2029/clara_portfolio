import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import JungleBackground from '@/components/JungleBackground';
import Nav from '@/components/Nav';
import ScrollIndicator from '@/components/ScrollIndicator';
import SEO from '@/components/SEO';
import Technologies from '@/components/Technologies';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

export default function Home() {
    const t = useTranslations('home');
    return (
        <>
            <SEO />
            <div className="bg-forest text-paper font-sans selection:bg-emerald-bright selection:text-forest">
                <JungleBackground />
                <Nav />
                <div className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-10 px-8 sm:px-16 text-center">
                        <h1 className="font-display text-7xl md:text-9xl mb-4 tracking-tighter leading-none">
                            Clara <span className="text-emerald-400 italic">SLYS</span>
                        </h1>
                        <p className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-emerald-bright/80 mb-10">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="#experiences"
                            className="px-8 py-3 bg-emerald-bright text-forest font-semibold rounded-full hover:bg-paper transition-all transform hover:scale-105"
                        >
                            {t('ctaPortfolio')}
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border border-emerald-bright/30 rounded-full hover:bg-emerald-deep transition-all"
                        >
                            {t('ctaContact')}
                        </Link>
                    </div>
                    <ScrollIndicator />
                </div>

                <Technologies />
                <About />
                <Experiences />
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}
