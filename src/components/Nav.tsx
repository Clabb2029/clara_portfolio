'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
    { href: '#technologies', key: 'mastery' as const },
    { href: '#about', key: 'behind' as const },
    { href: '#experiences', key: 'specimens' as const },
    { href: '#contact', key: 'contact' as const },
];

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

function NavLinks({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
    const t = useTranslations('nav');

    return (
        <>
            {NAV_LINKS.map(({ href, key }) => (
                <a
                    key={href}
                    href={href}
                    onClick={onNavigate}
                    className={className ?? 'hover:text-emerald-bright transition-colors'}
                >
                    {t(key)}
                </a>
            ))}
        </>
    );
}

function BurgerButton({
    isOpen,
    onClick,
    openLabel,
    closeLabel,
}: {
    isOpen: boolean;
    onClick: () => void;
    openLabel: string;
    closeLabel: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={isOpen ? closeLabel : openLabel}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 text-paper/80 hover:text-emerald-bright transition-colors"
        >
            <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                    isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                    isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            />
        </button>
    );
}

export default function Nav() {
    const pathname = usePathname() ?? '';
    const locale = pathname.startsWith('/en') ? 'en' : 'fr';
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen((open) => !open);

    return (
        <nav className="fixed top-0 w-full z-50 bg-forest/80 backdrop-blur-md border-b border-emerald-deep/30">
            <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
                <span className="font-display text-xl font-bold tracking-tight italic">CS.</span>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-paper/60">
                        <NavLinks />
                    </div>
                    <NavLanguageSwitch />
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <NavLanguageSwitch />
                    <BurgerButton
                        isOpen={isOpen}
                        onClick={toggleMenu}
                        openLabel={locale === 'fr' ? 'Ouvrir le menu' : 'Open menu'}
                        closeLabel={locale === 'fr' ? 'Fermer le menu' : 'Close menu'}
                    />
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-64' : 'max-h-0'
                }`}
                aria-hidden={!isOpen}
            >
                <div
                    className={`px-4 sm:px-6 pb-4 border-t border-emerald-deep/30 transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="flex flex-col gap-4 pt-4 text-xs font-mono uppercase tracking-widest text-paper/60">
                        <NavLinks
                            onNavigate={closeMenu}
                            className="hover:text-emerald-bright transition-colors py-1"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
