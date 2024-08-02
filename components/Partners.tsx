import React, { useEffect, useRef } from 'react';
import styles from '../styles/Partners.module.css';

interface Partner {
    logo: string;
    name: string;
}

interface PartnersProps {
    partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const totalWidth = carousel.scrollWidth;
            carousel.style.setProperty('--carousel-width', `${totalWidth}px`);
        }
    }, [partners]);

    return (
        <section className="flex h-40 bg-blue items-center">
            <h2 className="px-5 min-w-60  text-2xl text-white text-center mb-4">Our Partners</h2>
            <div className={styles.partnerCarouselWrapper}>
                <div ref={carouselRef} className={styles.partnerCarousel}>
                    {/* Duplicate the partners to ensure continuous scroll */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="text-center">
                            <img src={partner.logo} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
