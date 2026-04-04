import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import LanguageSwitch from './LanguageSwitch';

export default function GenericLegal({ type }: { type: 'privacy-policy' | 'legal-mentions' }) {
    const t = useTranslations(type);
    const router = useRouter();

    return (
        <section id={type} className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
            <div className="bg-black/40 backdrop-blur-sm">
                <div className="min-h-screen bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-5">
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 mb-5 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                        {t('back')}
                    </button>
                    <LanguageSwitch />
                    <div className="max-w-[95%] md:max-w-4/5 xl:max-w-3/5 mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-green-800/30 text-white flex flex-col gap-8">
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
                </div>
            </div>
        </section>
    );
}
