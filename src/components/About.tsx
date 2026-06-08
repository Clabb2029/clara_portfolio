import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('about');
    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12">
                    <span className="font-mono text-xs text-emerald-bright mb-2 block uppercase tracking-widest">{t('subtitle')}</span>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        {t('title')} <span className="italic text-emerald-bright">{t('title2')}</span>
                    </h2>
                </header>

                <div className="relative bg-[#463320] p-6 md:p-12 rounded-3xl shadow-inner border-[10px] border-[#2a1a0a]">
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none rounded-xl"
                        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                    ></div>
                    <div className="relative flex flex-col lg:flex-row gap-4 items-start">
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 m-auto items-center lg:w-1/3">
                            <div className="rotate-1 bg-white p-4 shadow-xl text-forest hover:-rotate-1 transition-transform duration-300">
                                <Image
                                    src="/about/plant.jpg"
                                    loading="lazy"
                                    alt={t('plant-alt')}
                                    width={1080}
                                    height={1080}
                                    className="sm:h-fit aspect-square object-cover shrink-0 mb-4"
                                />
                                <p className="font-mono text-xs italic text-center">{t('plant-description')}</p>
                            </div>
                            <div className="-rotate-1 bg-white p-4 shadow-xl text-forest hover:rotate-1 transition-transform duration-300">
                                <Image
                                    src="/about/mochi.jpg"
                                    loading="lazy"
                                    alt={t('mochi-alt')}
                                    width={1080}
                                    height={1080}
                                    className="sm:h-fit aspect-square object-cover shrink-0 mb-4"
                                />
                                <p className="font-mono text-xs italic text-center">{t('mochi-description')}</p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 m-auto w-full">
                            <div className="bg-yellow-100 rotate-2 p-5 shadow-md cursor-pointer aspect-square w-full flex flex-col hover:-rotate-2 transition-transform duration-300">
                                <div className="w-3 h-3 rounded-full bg-red-400 mx-auto -mt-7 mb-3 shadow-sm shrink-0"></div>
                                <p className="text-forest font-mono text-xs sm:text-sm sm:leading-relaxed flex-1 flex items-center justify-center text-center overflow-y-auto">
                                    {t('note1')}
                                </p>
                            </div>

                            <div className="bg-emerald-100 -rotate-3 p-5 shadow-md cursor-pointer aspect-square w-full flex flex-col hover:rotate-3 transition-transform duration-300">
                                <div className="w-3 h-3 rounded-full bg-blue-400 mx-auto -mt-7 mb-3 shadow-sm shrink-0"></div>
                                <p className="text-forest font-mono text-xs sm:text-sm sm:leading-relaxed flex-1 flex items-center justify-center text-center overflow-y-auto">
                                    {t('note2')}
                                </p>
                            </div>

                            <div className="bg-emerald-50 -rotate-2 p-5 shadow-md cursor-pointer aspect-square w-full flex flex-col hover:rotate-2 transition-transform duration-300">
                                <div className="w-3 h-3 rounded-full bg-green-400 mx-auto -mt-7 mb-3 shadow-sm shrink-0"></div>
                                <p className="text-forest font-mono text-xs sm:text-sm sm:leading-relaxed flex-1 flex items-center justify-center text-center overflow-y-auto">
                                    {t('note3')}
                                </p>
                            </div>

                            <div className="bg-emerald-200 rotate-3 p-5 shadow-md cursor-pointer aspect-square w-full flex flex-col hover:-rotate-3 transition-transform duration-300">
                                <div className="w-3 h-3 rounded-full bg-green-400 mx-auto -mt-7 mb-3 shadow-sm shrink-0"></div>
                                <div className="flex-1 flex items-center justify-center">
                                    <a
                                        href={`/about/${t('resume-link')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 px-4 py-2 rounded-full bg-emerald-700 text-emerald-50 font-medium hover:bg-emerald-800 transition-colors"
                                    >
                                        {t('cta')} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
