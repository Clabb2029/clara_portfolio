export default function TechnologiesCard({ technologies, title }: { technologies: { name: string; src: string }[]; title: string }) {
    return (
        <div className="space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-emerald-bright">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology.name}
                        className="px-3 py-1 bg-forest border border-emerald-deep rounded text-xs hover:border-emerald-bright hover:text-emerald-bright transition-colors cursor-default"
                    >
                        {technology.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
