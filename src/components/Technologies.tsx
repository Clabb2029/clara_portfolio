import { useTranslations } from 'next-intl';
import TechnologiesCard from './TechnologiesCard';

export default function Technologies() {
    const t = useTranslations('technologies');

    const langages = ['JavaScript', 'TypeScript', 'Java', 'Node.js', 'HTML', 'CSS', 'SASS', 'SCSS'];

    const frameworks = [
        'React',
        'React Native',
        'Next.js',
        'Angular',
        'Spring Boot',
        'Hibernate',
        'Socket.io',
        'PeerJS',
        'Chart.js',
        'Quill',
    ];

    const libraries = ['Tailwind CSS', 'Bootstrap', 'DaisyUI', 'Material UI', 'React Bootstrap', 'jQuery', 'Express.js'];

    const databases = ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Prisma', 'Sequelize'];

    const tests = ['Jasmine', 'Karma', 'JUnit', 'Mockito', 'AssertJ'];

    const versionning = ['Git', 'GitHub', 'GitLab', 'Docker', 'CI / CD', 'Stripe'];

    const tools = [
        'Postman',
        'VS Code',
        'Cursor (Claude AI)',
        'IntelliJ',
        'Eclipse',
        'Linux',
        'Windows',
        'Figma',
        'Whimsical',
        'Asana',
        'Notion',
        'Trello',
        'Agile / SCRUM',
    ];

    return (
        <section id="technologies" className="py-24 px-6 bg-emerald-deep/10 border-y border-emerald-deep/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                            {t('title')} <span className="italic text-emerald-bright">{t('title2')}</span>
                        </h2>
                        <p className="text-paper/60 text-sm leading-relaxed max-w-xs">{t('description')}</p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                        {[
                            { technologies: langages, title: t('languages') },
                            { technologies: frameworks, title: t('frameworks') },
                            { technologies: libraries, title: t('libraries') },
                            { technologies: databases, title: t('databases') },
                            { technologies: tests, title: t('tests') },
                            { technologies: versionning, title: t('versionning') },
                            { technologies: tools, title: t('tools') },
                        ].map(({ technologies, title }) => {
                            return <TechnologiesCard key={title} technologies={technologies} title={title} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
