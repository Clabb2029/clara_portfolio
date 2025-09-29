import TechnologiesCard from './TechnologiesCard';

export default function Technologies() {
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
            <div className="max-w-9/10 xl:max-w-3/4 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    Technologies <span className="text-emerald-400">Maîtrisées</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TechnologiesCard technologies={langages} title="Langages" />
                    <TechnologiesCard technologies={frameworks} title="Frameworks" />
                    <TechnologiesCard technologies={libraries} title="Librairies" />
                    <TechnologiesCard technologies={databases} title="Bases de données" />
                    <TechnologiesCard technologies={tests} title="Tests" />
                    <TechnologiesCard technologies={tools} title="Outils" />
                </div>
            </div>
        </section>
    );
}
