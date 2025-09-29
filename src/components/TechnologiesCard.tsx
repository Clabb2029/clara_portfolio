export default function TechnologiesCard({ technologies, title }: { technologies: { name: string; src: string }[]; title: string }) {
    return (
        <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-800/30">
            <div className="text-xl mb-4 text-white/75 group-hover:text-emerald-400 transition-all duration-300">{title}</div>
            <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((technology) => (
                    <div key={technology.name} className="flex flex-col items-center justify-center gap-2 p-2">
                        <img
                            src={technology.src}
                            alt={technology.name}
                            className="w-12 h-12 sm:w-15 sm:h-15 sm:grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-white/50 text-xs text-center sm:opacity-0 group-hover:opacity-100 transition-all duration-300">
                            {technology.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
