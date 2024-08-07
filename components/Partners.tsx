import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
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
        <section className="flex h-16 sm:h-28  bg-blue items-center justify-between">
            <h2 className="flex px-4 sm:px-8 min-w-fit md:pl-20 md:text-2xl text-sm sm:text-xl h-full  text-white items-center justify-between border-r-2 border-r-white">Our Partners</h2>
            <div className={styles.partnerCarouselWrapper}>
                <div ref={carouselRef} className={styles.partnerCarousel}>
                    {/* Duplicate the partners to ensure continuous scroll */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="text-center">
                            <Image src={partner.logo} alt={partner.name}
                                width={100} // Adjust width as needed
                                height={50} // Adjust height as needed 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
