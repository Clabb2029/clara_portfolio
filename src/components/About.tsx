import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('about');
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
            <div className="max-w-9/10 lg:max-w-4/5 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    {t('title')} <span className="text-emerald-400">{t('title2')}</span>
                </h2>
                <div
                    className="relative bg-cover bg-center bg-no-repeat rounded-3xl p-5 sm:p-15 opacity-75"
                    style={{
                        backgroundImage: 'url("/about/wood.jpg")',
                    }}
                >
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 p-2 xl:p-10 place-items-center">
                        {/* Plante note */}
                        <div className="flex justify-center lg:justify-start order-1 rounded-xs rotate-20 shadow-2xl h-fit relative shrink-0">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-0 left-1/7 -rotate-70 z-10 shrink-0"
                            />
                            <Image
                                src="/about/plant.jpg"
                                alt={t('plant-alt')}
                                width={1080}
                                height={1080}
                                className="size-50 sm:size-70 shrink-0"
                            />
                        </div>

                        {/* First text note */}
                        <div className="flex justify-center lg:justify-end order-2 bg-gradient-to-br from-lime-100 to-lime-200 rounded-xs p-2 md:p-8 shadow-2xl -rotate-10 relative aspect-square size-55 sm:size-70">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-0 left-1/2 rotate-20 z-10 shrink-0"
                            />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold text-xs sm:text-sm xl:text-[15px] flex items-center justify-center mt-5">
                                {t('note1')}
                            </p>
                        </div>

                        {/* Mochi note */}
                        <div className="flex justify-center lg:justify-end order-3 md:order-4 xl:order-3 rounded-xs rotate-12 shadow-2xl h-fit relative shrink-0">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-0 left-1/7 -rotate-70 z-10 shrink-0"
                            />
                            <Image
                                src="/about/mochi.jpg"
                                alt={t('mochi-alt')}
                                width={1080}
                                height={1080}
                                className="size-50 sm:size-70 shrink-0"
                            />
                        </div>

                        {/* Second text note */}
                        <div className="flex justify-center lg:justify-start order-4 md:order-3 xl:order-4 bg-gradient-to-br from-teal-200 to-teal-300 rounded-xs p-2 md:p-8 shadow-2xl -rotate-12 relative h-fit shrink-0 size-55 sm:size-70">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-2 left-2/5 -rotate-70 z-10 shrink-0"
                            />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold text-xs sm:text-sm xl:text-[15px] aspect-square flex items-center justify-center mt-5">
                                {t('note2')}
                            </p>
                        </div>

                        {/* Download CV button */}
                        <div className="flex justify-center lg:justify-center my-auto w-50 m-5 order-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xs p-8 shadow-2xl rotate-15 relative shrink-0">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-0 left-2/5 -rotate-70 z-10 shrink-0"
                            />
                            <button
                                className="cursor-pointer px-8 py-3 text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-102 transition-all duration-300 mt-10 flex items-center gap-2"
                                onClick={() => window.open(`/about/${t('resume-link')}`, '_blank')}
                            >
                                <ExternalLink size={30} />
                                {t('cta')}
                            </button>
                        </div>

                        {/* Third text note */}
                        <div className="flex justify-center lg:justify-end order-6 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xs p-2 md:p-8 shadow-2xl -rotate-8 relative aspect-square size-55 sm:size-70">
                            <Image
                                src="/about/pin.png"
                                alt={t('pin-alt')}
                                width={100}
                                height={100}
                                className="size-10 absolute top-0 left-4/9 z-10 shrink-0 mb-5"
                            />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold text-xs sm:text-sm xl:text-[15px] flex items-center justify-center mt-5">
                                {t('note3')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
