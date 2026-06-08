import { useTranslations } from 'next-intl';

export interface ExperienceContent {
    tab: string;
    title: string;
    content?: string;
    items: string[];
}

export interface Experience {
    shortTitle: string;
    longTitle: string;
    company: string;
    companyUrl?: string;
    experienceUrl?: string;
    imageUrls: string[];
    startDate: string;
    endDate?: string;
    location: string;
    shortDescription: string;
    technologies: string[];
    contents: ExperienceContent[];
}

const EXPERIENCE_IMAGE_PATHS: string[][] = [
    [
        '/experiences/jurni/1_jurni_register.png',
        '/experiences/jurni/2_jurni_quiz.png',
        '/experiences/jurni/3_jurni_chat.png',
        '/experiences/jurni/4_jurni_dashboard.png',
        '/experiences/jurni/5_jurni_motivations.png',
        '/experiences/jurni/6_jurni_big5.png',
        '/experiences/jurni/7_jurni_job_fits.png',
    ],
    [
        '/experiences/simulsuite/1_simulphone_login.png',
        '/experiences/simulsuite/2_simulforge_login.png',
    ],
    [
        '/experiences/marches_publics/1_marches_publics_landing_1.png',
        '/experiences/marches_publics/2_marches_publics_lading_2.png',
        '/experiences/marches_publics/3_marches_publics_offers.png',
        '/experiences/marches_publics/4_marches_publics_prices.png',
        '/experiences/marches_publics/5_marches_publics_questions.png',
    ],
    [
        '/experiences/showcase_website/1_showcase_website_landing.png',
        '/experiences/showcase_website/2_showcase_website_creations.png',
        '/experiences/showcase_website/3_showcase_website_materials.png',
        '/experiences/showcase_website/4_showcase_website_courses.png',
        '/experiences/showcase_website/5_showcase_website_contact.png',
        '/experiences/showcase_website/6_showcase_logo.png',
    ],
];

type RawDescription = Record<
    string,
    {
        tab: string;
        title: string;
        content?: string;
        'content-list'?: Record<string, string>;
    }
>;

function parseContents(raw: RawDescription): ExperienceContent[] {
    return Object.keys(raw)
        .sort((a, b) => parseInt(a.replace('content-', ''), 10) - parseInt(b.replace('content-', ''), 10))
        .map((key) => {
            const entry = raw[key];
            const listItems = entry['content-list']
                ? Object.keys(entry['content-list'])
                      .sort(
                          (a, b) =>
                              parseInt(a.replace('list-item-', ''), 10) - parseInt(b.replace('list-item-', ''), 10),
                      )
                      .map((itemKey) => entry['content-list']![itemKey])
                : [];

            return {
                tab: entry.tab,
                title: entry.title,
                content: entry.content,
                items: listItems,
            };
        });
}

export const useExperiencesData = (): Experience[] => {
    const t = useTranslations('experiences');

    return EXPERIENCE_IMAGE_PATHS.map((imageUrls, index) => {
        const description = t.raw(`experience-list.${index}.description`) as RawDescription;

        return {
            shortTitle: t(`experience-list.${index}.short-title`),
            longTitle: t(`experience-list.${index}.long-title`),
            company: t(`experience-list.${index}.company`),
            companyUrl: t(`experience-list.${index}.companyUrl`),
            experienceUrl: t(`experience-list.${index}.experienceUrl`),
            imageUrls,
            startDate: t(`experience-list.${index}.startDate`),
            endDate: t(`experience-list.${index}.endDate`),
            location: t(`experience-list.${index}.location`),
            shortDescription: t(`experience-list.${index}.short-description`),
            technologies: t.raw(`experience-list.${index}.technologies`) as string[],
            contents: parseContents(description),
        };
    });
};
