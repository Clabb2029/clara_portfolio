import { useExperiencesData, type Experience } from '@/utils/experiencesdata';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

const TABS_SCROLLBAR_CLASS =
    'overflow-x-auto pb-1 [scrollbar-width:thin] [scrollbar-color:rgba(52,211,153,0.35)_rgba(6,78,59,0.25)] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-emerald-deep/25 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-bright/35 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-emerald-bright/55';

function useHorizontalScrollOverflow(ref: RefObject<HTMLDivElement | null>, deps: unknown[]) {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setCanScrollLeft(scrollLeft > 2);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
        };

        update();
        el.addEventListener('scroll', update, { passive: true });
        const observer = new ResizeObserver(update);
        observer.observe(el);

        return () => {
            el.removeEventListener('scroll', update);
            observer.disconnect();
        };
    }, deps);

    return { canScrollLeft, canScrollRight };
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goTo = useCallback(
        (index: number) => {
            setCurrentIndex((index + images.length) % images.length);
        },
        [images.length],
    );

    if (images.length === 0) return null;

    return (
        <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[400px] group">
            <div className="absolute inset-4 sm:inset-6">
                <Image
                    src={images[currentIndex]}
                    alt={`${alt} — ${currentIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 58vw"
                />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={() => goTo(currentIndex - 1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-forest/70 border border-emerald-bright/30 text-emerald-bright flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-forest"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => goTo(currentIndex + 1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-forest/70 border border-emerald-bright/30 text-emerald-bright flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-forest"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goTo(index)}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-emerald-bright' : 'bg-paper/30 hover:bg-paper/50'
                                }`}
                                aria-label={`Image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function FeaturedExperience({ experience, specimenNumber }: { experience: Experience; specimenNumber: number }) {
    const t = useTranslations('experiences');
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef<HTMLDivElement>(null);
    const { canScrollLeft, canScrollRight } = useHorizontalScrollOverflow(tabsRef, [experience.contents.length]);

    const activeContent = experience.contents[activeTab];

    const scrollTabs = useCallback((direction: 'left' | 'right') => {
        tabsRef.current?.scrollBy({ left: direction === 'left' ? -120 : 120, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const el = tabsRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            if (el.scrollWidth <= el.clientWidth) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [experience.contents.length]);

    return (
        <article className="grid grid-cols-1 md:grid-cols-12 gap-0 w-full max-w-full min-w-0 border border-emerald-deep/40 rounded-3xl overflow-hidden mb-12 md:mb-20">
            <div className="md:col-span-7 relative min-h-[280px] sm:min-h-[360px] md:min-h-[400px] min-w-0 bg-gradient-to-br from-emerald-deep/40 to-forest">
                <div className="absolute inset-0">
                    <ImageCarousel images={experience.imageUrls} alt={experience.shortTitle} />
                </div>
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-paper/30 pointer-events-none">
                    {t('specimenLabel', { number: String(specimenNumber).padStart(2, '0') })}
                </div>
            </div>

            <div className="md:col-span-5 min-w-0 bg-emerald-deep/10 p-5 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-emerald-deep/40">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 min-w-0">
                    <div className="min-w-0">
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl leading-tight break-words">{experience.shortTitle}</h3>
                        {experience.companyUrl ? (
                            <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="font-mono text-[11px] text-paper/60 hover:text-emerald-bright transition-colors break-words"
                            >
                                @ {experience.company} · {experience.location}
                            </a>
                        ) : (
                            <span className="font-mono text-[11px] text-paper/60 break-words">
                                @ {experience.company} · {experience.location}
                            </span>
                        )}
                    </div>
                    <span className="font-mono text-[10px] px-2 py-1 bg-emerald-bright/10 border border-emerald-bright/30 text-emerald-bright whitespace-nowrap self-start shrink-0">
                        {experience.startDate} → {experience.endDate}
                    </span>
                </div>

                <p className="text-sm text-paper/70 leading-relaxed mb-6 whitespace-pre-line break-words">{experience.shortDescription}</p>

                <div className="relative mb-5 border-b border-emerald-deep/40 min-w-0 max-w-full">
                    {canScrollLeft && (
                        <button
                            type="button"
                            onClick={() => scrollTabs('left')}
                            className="absolute left-0 top-0 bottom-1 z-10 w-5 flex items-center justify-center text-[10px] text-emerald-bright/50 hover:text-emerald-bright transition-colors bg-gradient-to-r from-emerald-deep/10 to-transparent"
                            aria-label="Scroll tabs left"
                        >
                            ◀
                        </button>
                    )}
                    {canScrollRight && (
                        <button
                            type="button"
                            onClick={() => scrollTabs('right')}
                            className="absolute right-0 top-0 bottom-1 z-10 w-5 flex items-center justify-center text-[10px] text-emerald-bright/50 hover:text-emerald-bright transition-colors bg-gradient-to-l from-emerald-deep/10 to-transparent"
                            aria-label="Scroll tabs right"
                        >
                            ▶
                        </button>
                    )}
                    <div
                        ref={tabsRef}
                        className={`flex gap-3 ${TABS_SCROLLBAR_CLASS} ${canScrollLeft ? 'pl-5' : ''} ${canScrollRight ? 'pr-5' : ''}`}
                    >
                        {experience.contents.map((content, index) => (
                            <button
                                key={content.tab}
                                type="button"
                                onClick={() => setActiveTab(index)}
                                className={`shrink-0 pb-2 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                                    index === activeTab
                                        ? 'border-emerald-bright text-emerald-bright'
                                        : 'border-transparent text-paper/40 hover:text-paper'
                                }`}
                            >
                                {content.tab}
                            </button>
                        ))}
                    </div>
                </div>

                {activeContent && (
                    <div className="space-y-3 mb-6 min-w-0 max-w-full">
                        <h4 className="font-display text-base italic text-paper/90 break-words">{activeContent.title}</h4>
                        {activeContent.content && (
                            <p className="text-xs text-paper/70 leading-relaxed whitespace-pre-line break-words">{activeContent.content}</p>
                        )}
                        {activeContent.items.length > 0 && (
                            <ul className="space-y-2">
                                {activeContent.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-xs text-paper/70 leading-relaxed pl-4 relative whitespace-pre-line break-words"
                                    >
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-emerald-bright/60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-5 min-w-0 max-w-full">
                    {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-deep/60 text-emerald-bright/80 break-words max-w-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {experience.experienceUrl && (
                    <a
                        href={experience.experienceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-center w-full max-w-full box-border py-3 px-2 border border-emerald-bright text-emerald-bright text-xs font-bold uppercase tracking-widest hover:bg-emerald-bright hover:text-forest transition-all"
                    >
                        {t('visitProject')}
                    </a>
                )}
            </div>
        </article>
    );
}

export default function Experiences() {
    const t = useTranslations('experiences');
    const experiences = useExperiencesData();
    const [activeIndex, setActiveIndex] = useState(0);

    const activeExperience = experiences[activeIndex];
    const otherExperiences = experiences.filter((_, index) => index !== activeIndex);

    const handleSelectExperience = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="experiences" className="py-16 md:py-24 px-4 sm:px-6 bg-forest overflow-x-hidden">
            <div className="max-w-6xl mx-auto w-full min-w-0">
                <header className="mb-10 md:mb-16">
                    <span className="font-mono text-xs text-emerald-bright mb-2 block uppercase tracking-widest">{t('subtitle')}</span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
                        {t('title')} <span className="text-emerald-bright italic">{t('title2')}</span>
                    </h2>
                </header>

                <FeaturedExperience key={activeIndex} experience={activeExperience} specimenNumber={activeIndex + 1} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 min-w-0">
                    {otherExperiences.map((experience) => {
                        const originalIndex = experiences.indexOf(experience);

                        return (
                            <button
                                key={experience.shortTitle}
                                type="button"
                                onClick={() => handleSelectExperience(originalIndex)}
                                className="group cursor-pointer text-left min-w-0 w-full"
                            >
                                <div className="aspect-video bg-emerald-deep/20 rounded-xl mb-4 border border-emerald-deep/40 group-hover:border-emerald-bright/50 transition-colors overflow-hidden relative">
                                    <Image
                                        src={experience.imageUrls[0]}
                                        alt={experience.shortTitle}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h4 className="font-display text-xl mb-1 italic">{experience.shortTitle}</h4>
                                <p className="text-xs text-paper/50 font-mono">{experience.technologies.slice(0, 2).join(' / ')}</p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
