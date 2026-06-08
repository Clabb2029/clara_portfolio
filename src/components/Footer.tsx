import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('footer');
    const locale = useLocale();

    return (
        <footer id="footer" className="py-12 px-6 border-t border-emerald-deep/20">
            <div className="w-fit max-w-9/10 mx-auto flex flex-col lg:flex-row gap-x-20 gap-y-5 ">
                <div className="flex flex-wrap gap-x-20 gap-y-2 font-mono text-sm text-paper/40 uppercase tracking-widest">
                    {/* Website links */}
                    <nav className="flex flex-col gap-x-6 gap-y-2 w-fit">
                        <Link href="#technologies" className="hover:text-emerald-bright transition-colors">
                            {t('technologies')}
                        </Link>
                        <Link href="#about" className="hover:text-emerald-bright transition-colors">
                            {t('about')}
                        </Link>
                        <Link href="#experiences" className="hover:text-emerald-bright transition-colors">
                            {t('experiences')}
                        </Link>
                        <Link href="#contact" className="hover:text-emerald-bright transition-colors">
                            {t('contact')}
                        </Link>
                    </nav>
                </div>

                {/* Availability + copyright */}
                <div className="flex flex-col gap-y-2 font-mono text-sm text-paper/30">
                    <div>
                        <Link href={`/${locale}/legal-mentions`} className="hover:text-emerald-bright transition-colors mr-2">
                            {t('legal-mentions')}
                        </Link>
                        -
                        <Link href={`/${locale}/privacy-policy`} className="hover:text-emerald-bright transition-colors ml-2">
                            {t('privacy-policy')}
                        </Link>
                    </div>
                    <p>{t('available')}</p>
                </div>
            </div>
            <p className="text-center mt-6 text-sm font-mono text-paper/30 tracking-widest">
                © {currentYear} {t('copyright')}
            </p>
        </footer>
    );
}
