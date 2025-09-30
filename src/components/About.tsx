import { Download } from 'lucide-react';

export default function About() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
            <div className="max-w-9/10 lg:max-w-4/5 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    Derrière <span className="text-emerald-400">l'Écran</span>
                </h2>
                <div
                    className="relative bg-cover bg-center bg-no-repeat rounded-3xl p-5 sm:p-15 opacity-75"
                    style={{
                        backgroundImage: 'url("/about/wood.jpg")',
                    }}
                >
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-2 xl:p-10 place-items-center">
                        {/* Plante note */}
                        <div className="flex justify-center lg:justify-start order-1 rounded-xs rotate-20 shadow-2xl h-fit relative">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-1/7 w-10 h-10 -rotate-70 z-10" />
                            <img src="/about/plant.jpg" alt="Plante" className="w-50 h-50 sm:w-70 sm:h-70" />
                        </div>

                        {/* First text note */}
                        <div className="flex justify-center lg:justify-end max-w-xs order-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xs p-8 shadow-2xl -rotate-10 relative ">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-1/2 w-10 h-10 rotate-20 z-10" />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold mt-10 text-xs sm:text-sm md:text-md">
                                Salut, moi c'est Clara 👋 Je suis développeuse fullstack et ce qui me plaît, c'est de transformer des idées
                                en projets concrets, utiles et bien pensés. J'aime travailler autant sur la partie technique que sur
                                l'expérience utilisateur, parce que pour moi un bon projet, c'est un mélange d'efficacité et de simplicité !
                            </p>
                        </div>

                        {/* Mochi note */}
                        <div className="flex justify-center lg:justify-end order-3 md:order-4 lg:order-3 rounded-xs rotate-12 shadow-2xl h-fit relative">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-1/7 w-10 h-10 -rotate-70 z-10" />
                            <img src="/about/mochi.jpg" alt="Mochi" className="w-50 h-50 sm:w-70 sm:h-70" />
                        </div>

                        {/* Second text note */}
                        <div className="flex justify-center lg:justify-start max-w-xs order-4 md:order-3 lg:order-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xs p-8 shadow-2xl -rotate-12 relative h-fit">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-2/5 w-10 h-10 -rotate-70 z-10" />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold mt-10 text-xs sm:text-sm md:text-md">
                                En dehors de l'écran, je suis une grande amoureuse des plantes ! Et depuis peu, un petit chiot partage mon
                                quotidien, ce qui m'apprend la patience et la créativité autrement qu'avec du code !
                            </p>
                        </div>

                        {/* Download CV button */}
                        <div className="flex justify-center lg:justify-center my-auto w-50 m-5 order-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xs p-8 shadow-2xl rotate-15 relative">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-2/5 w-10 h-10 -rotate-70 z-10" />
                            <button className="cursor-pointer px-8 py-3 text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-102 transition-all duration-300 mt-10 flex items-center gap-2">
                                <Download size={30} />
                                Télécharger mon CV
                            </button>
                        </div>

                        {/* Third text note */}
                        <div className="flex justify-center lg:justify-end max-w-xs order-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xs p-8 shadow-2xl -rotate-8 relative">
                            <img src="/about/pin.png" alt="Pin" className="absolute top-0 left-4/9 w-10 h-10 z-10" />
                            <p className="text-gray-800 leading-relaxed font-shadown font-semibold mt-10 text-xs sm:text-sm md:text-md">
                                Si tu veux en savoir un peu plus sur mon parcours, tu peux jeter un œil à mon CV. Et si tu as un projet web
                                en tête ou simplement envie d'échanger, je serais ravie d'en discuter avec toi. Tu peux m'écrire directement
                                via le formulaire de contact que tu retrouveras juste en dessous 👇
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
