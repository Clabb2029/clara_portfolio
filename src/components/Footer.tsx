import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('footer');

    return (
        <footer id="footer" className="py-10 bg-gradient-to-r from-[#021109] to-[#00100b] text-white/50 text-start">
            <div className="w-fit max-w-9/10 mx-auto flex flex-col lg:flex-row gap-x-20 gap-y-5">
                <div className="flex flex-wrap gap-x-20 gap-y-2">
                    {/* Website links */}
                    <nav className="flex flex-col gap-x-6 gap-y-2 w-fit">
                        <Link href="#technologies" className="hover:text-white">
                            {t('technologies')}
                        </Link>
                        <Link href="#about" className="hover:text-white">
                            {t('about')}
                        </Link>
                        <Link href="#experiences" className="hover:text-white">
                            {t('experiences')}
                        </Link>
                        <Link href="#contact" className="hover:text-white">
                            {t('contact')}
                        </Link>
                    </nav>

                    {/* Social */}
                    <div className="flex flex-col gap-x-6 gap-y-2 w-fit">
                        <Link
                            href="https://gitlab.com/Clara_Slys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                            aria-label="GitLab"
                        >
                            GitLab
                        </Link>
                        <Link
                            href="https://github.com/Clabb2029"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                            aria-label="GitHub"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/clara-slys/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* Availability + copyright */}
                <div className="flex flex-col gap-y-2">
                    <div>
                        <Link href="/legal-mentions" className="hover:text-white mr-2">
                            {t('legal-mentions')}
                        </Link>
                        -
                        <Link href="/privacy-policy" className="hover:text-white ml-2">
                            {t('privacy-policy')}
                        </Link>
                    </div>
                    <p>{t('available')}</p>
                </div>
            </div>
            <p className="text-center mt-6 text-sm">
                © {currentYear} {t('copyright')}
            </p>
        </footer>
    );
}
