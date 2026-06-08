'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function NavLanguageSwitch() {
    const router = useRouter();
    const pathname = usePathname() ?? '';

    const locale = pathname.startsWith('/en') ? 'en' : 'fr';
    const nextLocale = locale === 'fr' ? 'en' : 'fr';

    const switchLocale = () => {
        const newPath = pathname.replace(/^\/(fr|en)/, `/${nextLocale}`);
        router.push(newPath);
    };

    return (
        <div className="inline-flex items-center gap-2">
            <label htmlFor="switch" className="text-paper/60 text-xs cursor-pointer">
                EN
            </label>
            <div className="relative inline-block w-11 h-5">
                <input
                    id="switch"
                    type="checkbox"
                    checked={locale === 'fr'}
                    onChange={switchLocale}
                    className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-emerald-deep cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="switch"
                    className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-emerald-deep shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                />
            </div>
            <label htmlFor="switch" className="text-paper/60 text-xs cursor-pointer">
                FR
            </label>
        </div>
    );
}

export default function Nav() {
    const t = useTranslations('nav');

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-forest/80 backdrop-blur-md border-b border-emerald-deep/30">
            <span className="font-display text-xl font-bold tracking-tight italic">CS.</span>
            <div className="flex items-center gap-8">
                <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-paper/60">
                    <a href="#technologies" className="hover:text-emerald-bright transition-colors">
                        {t('mastery')}
                    </a>
                    <a href="#about" className="hover:text-emerald-bright transition-colors">
                        {t('behind')}
                    </a>
                    <a href="#experiences" className="hover:text-emerald-bright transition-colors">
                        {t('specimens')}
                    </a>
                    <a href="#contact" className="hover:text-emerald-bright transition-colors">
                        {t('contact')}
                    </a>
                </div>
                <NavLanguageSwitch />
            </div>
        </nav>
    );
}
