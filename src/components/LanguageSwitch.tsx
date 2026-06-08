'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitch() {
    const router = useRouter();
    const pathname = usePathname() ?? '';

    const locale = pathname.startsWith('/en') ? 'en' : 'fr';
    const nextLocale = locale === 'fr' ? 'en' : 'fr';

    const switchLocale = () => {
        const newPath = pathname.replace(/^\/(fr|en)/, `/${nextLocale}`);
        router.push(newPath);
    };

    return (
        <div className="absolute top-5 right-5 p-2 rounded-xl bg-emerald-deep/10 border border-emerald-deep/30 z-10">
            <div className="inline-flex items-center gap-2">
                <label htmlFor="switch" className="text-white text-sm cursor-pointer">
                    FR
                </label>
                <div className="relative inline-block w-11 h-5">
                    <input
                        id="switch"
                        type="checkbox"
                        checked={locale === 'en'}
                        onChange={switchLocale}
                        className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full border-[2px] border-emerald-deep/30 checked:bg-green-900 cursor-pointer transition-colors duration-300"
                    />
                    <label
                        htmlFor="switch"
                        className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-green-900 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                    />
                </div>
                <label htmlFor="switch" className="text-white text-sm cursor-pointer">
                    EN
                </label>
            </div>
        </div>
    );
}
