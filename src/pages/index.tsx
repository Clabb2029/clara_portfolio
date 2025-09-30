import About from '@/components/About';
import JungleBackground from '@/components/JungleBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import SEO from '@/components/SEO';
import Technologies from '@/components/Technologies';
import { Leaf, LeafyGreen } from 'lucide-react';

export default function Home() {
    return (
        <>
            <SEO />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative text-center">
                <JungleBackground />

                <div className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                    {/* Greeting */}
                    <div className="relative max-w-9/10 xl:max-w-3/4 mx-auto mb-20">
                        <div className="absolute -top-5 right-5 sm:right-20 w-6 h-6 text-white">
                            <Leaf />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                            Clara <span className="text-emerald-400">SLYS</span>
                        </h1>
                        <p className="text-md sm:text-xl md:text-2xl text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Développeuse Web FullStack passionnée
                        </p>
                        <div className="absolute bottom-0 left-5 sm:left-20 w-6 h-6 rotate-180 text-emerald-400">
                            <LeafyGreen />
                        </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-9/10 xl:max-w-3/4 mx-auto">
                        <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Découvrir mes projets
                        </button>
                        <button className="px-8 py-3 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                            Me contacter
                        </button>
                    </div>
                    <ScrollIndicator />
                </div>

                <div className="relative z-10 bg-black/40 backdrop-blur-sm">
                    <Technologies />
                    <About />
                </div>
            </div>
        </>
    );
}
