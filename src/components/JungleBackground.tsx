import { useEffect, useState } from 'react';

export default function JungleBackground() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculer l'opacité basée sur le scroll pour l'effet de disparition
    const getLeftOpacity = () => {
        const maxScroll = 800; // Distance de scroll pour disparition complète
        const opacity = Math.max(0, 1 - scrollY / maxScroll);
        return opacity;
    };

    const getRightOpacity = () => {
        const maxScroll = 800; // Distance de scroll pour disparition complète
        const opacity = Math.max(0, 1 - scrollY / maxScroll);
        return opacity;
    };

    // Calculer la position de translation pour l'effet de glissement
    const getLeftTranslateX = () => {
        const maxScroll = 800;
        // Les images de gauche doivent aller plus vers la gauche (valeurs plus négatives)
        const translateX = -(scrollY / maxScroll) * 100;
        return translateX;
    };

    const getRightTranslateX = () => {
        const maxScroll = 800;
        // Les images de droite doivent aller plus vers la droite (valeurs plus positives)
        const translateX = (scrollY / maxScroll) * 100;
        return translateX;
    };

    return (
        <div className="absolute inset-0 overflow-hidden max-h-screen">
            {/* Jungle left */}
            <div
                className="transition-all duration-1200 ease-out absolute top-0 -left-20 w-full h-full"
                style={{
                    transform: `translateX(${getLeftTranslateX() * 0.6}%)`,
                    opacity: getLeftOpacity() * 0.6,
                }}
            >
                <img
                    src="/jungle_left.png"
                    alt="Jungle background left"
                    className="w-full h-full object-cover object-left"
                    style={{
                        filter: 'hue-rotate(15deg) saturate(1.3) contrast(1.2)',
                    }}
                />
            </div>

            <div
                className="transition-all duration-800 ease-out absolute -left-150 -top-100"
                style={{
                    transform: `translateX(${getLeftTranslateX() * 0.6}%)`,
                    opacity: getLeftOpacity() * 0.6,
                }}
            >
                <img
                    src="/jungle_left.png"
                    alt="Jungle background left"
                    className="w-[120%] h-[120%] object-cover -left-20"
                    style={{
                        filter: 'hue-rotate(30deg) saturate(1.2) contrast(1.5)',
                    }}
                />
            </div>

            {/* Jungle right */}
            <div
                className="transition-all duration-1200 ease-out absolute top-0 -right-20 w-full h-full"
                style={{
                    transform: `translateX(${getRightTranslateX() * 0.8}%)`,
                    opacity: getRightOpacity() * 0.8,
                }}
            >
                <img
                    src="/jungle_right.png"
                    alt="Jungle background"
                    className="w-full h-full object-cover object-right"
                    style={{
                        filter: 'hue-rotate(0deg) saturate(1.3) contrast(1.2)',
                    }}
                />
            </div>

            <div
                className="transition-all duration-800 ease-out absolute -right-150 -bottom-100"
                style={{
                    transform: `translateX(${getLeftTranslateX() * 0.6}%)`,
                    opacity: getLeftOpacity() * 0.6,
                }}
            >
                <img
                    src="/jungle_right.png"
                    alt="Jungle background left"
                    className="w-[120%] h-[120%] object-cover -left-20"
                    style={{
                        filter: 'hue-rotate(10deg) saturate(1.2) contrast(1.5)',
                    }}
                />
            </div>
        </div>
    );
}
