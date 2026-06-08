import { useTranslations } from 'next-intl';
import TechnologiesCard from './TechnologiesCard';

export default function Technologies() {
    const t = useTranslations('technologies');

    const langages = [
        { name: 'JavaScript', src: './languages/javascript.png' },
        { name: 'TypeScript', src: './languages/typescript.png' },
        { name: 'Java', src: './languages/java.png' },
        { name: 'Node.js', src: './languages/nodejs.png' },
        { name: 'HTML', src: './languages/html.png' },
        { name: 'CSS', src: './languages/css.png' },
    ];

    const frameworks = [
        { name: 'React', src: './frameworks/react.png' },
        { name: 'Next.js', src: './frameworks/nextjs.png' },
        { name: 'Angular', src: './frameworks/angular.png' },
        { name: 'Spring Boot', src: './frameworks/spring.png' },
    ];

    const libraries = [
        { name: 'Tailwind CSS', src: './libraries/tailwind.png' },
        { name: 'Bootstrap', src: './libraries/bootstrap.png' },
        { name: 'DaisyUI', src: './libraries/daisyui.png' },
        { name: 'React Bootstrap', src: './libraries/react_bootstrap.png' },
    ];

    const databases = [
        { name: 'MySQL', src: './db/mysql.png' },
        { name: 'MariaDB', src: './db/mariadb.png' },
        { name: 'PostgreSQL', src: './db/postgresql.png' },
        { name: 'MongoDB', src: './db/mongodb.png' },
        { name: 'Postman', src: './db/postman.png' },
        { name: 'Prisma', src: './db/prisma.svg' },
    ];

    const tests = [
        { name: 'Jasmine', src: './tests/jasmine.png' },
        { name: 'Karma', src: './tests/karma.png' },
        { name: 'JUnit', src: './tests/junit.png' },
        { name: 'AssertJ', src: './tests/assertj.png' },
    ];

    const tools = [
        { name: 'Git', src: './tools/git.png' },
        { name: 'GitHub', src: './tools/github.png' },
        { name: 'GitLab', src: './tools/gitlab.png' },
        { name: 'VS Code', src: './tools/visual_studio_code.png' },
        { name: 'IntelliJ', src: './tools/intellij.png' },
        { name: 'Eclipse', src: './tools/eclipse.png' },
        { name: 'Docker', src: './tools/docker.png' },
        { name: 'Linux', src: './tools/linux.png' },
        { name: 'Windows', src: './tools/windows.png' },
        { name: 'Figma', src: './tools/figma.png' },
        { name: 'Asana', src: './tools/asana.svg' },
        { name: 'Notion', src: './tools/notion.png' },
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
                            { technologies: tools, title: t('tools') },
                        ].map(({ technologies, title }) => {
                            const uniqueTechnologies = Array.from(new Map(technologies.map((tech) => [tech.name, tech])).values());
                            return <TechnologiesCard key={title} technologies={uniqueTechnologies} title={title} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
