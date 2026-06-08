import { ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitch from './LanguageSwitch';

export default function GenericLegal({ type }: { type: 'privacy-policy' | 'legal-mentions' }) {
    const t = useTranslations(type);
    const locale = useLocale();

    return (
        <section id={type} className="bg-forest p-5">
            <Link
                href={`/${locale}`}
                className="w-fit flex items-center gap-2 px-8 py-3 bg-emerald-bright text-forest font-semibold rounded-full hover:bg-paper transition-all transform hover:scale-105"
            >
                <ArrowLeft size={20} />
                {t('back')}
            </Link>
            <LanguageSwitch />
            <div className="max-w-[95%] md:max-w-4/5 xl:max-w-3/5 mx-auto rounded-3xl p-12 mt-5 bg-emerald-deep/10 border border-emerald-deep/30 text-white flex flex-col gap-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">{t('title')}</h1>
                <p className={`${type === 'privacy-policy' ? 'text-white/50' : ''}`}>
                    {type === 'privacy-policy' ? t('date') : t('introduction')}
                </p>
                {t.raw('content').map((content: { subtitle: string; description: string }, index: number) => (
                    <div key={index}>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{content.subtitle}</h2>
                        <p className="whitespace-pre-wrap">{content.description}</p>
                    </div>
                ))}
                <p>{type === 'privacy-policy' ? t('conformity') : t('generation-site')}</p>
            </div>
        </section>
    );
}
