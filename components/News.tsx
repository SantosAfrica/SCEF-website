import React, { useEffect, useRef } from 'react';
import styles from '../styles/News.module.css';

interface News {
    description: string;
}

interface NewsProps {
    news: News[];
}

const News: React.FC<NewsProps> = ({ news }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const totalWidth = carousel.scrollWidth;
            carousel.style.setProperty('--carousel-width', `${totalWidth}px`);
        }
    }, [news]);

    return (
        <section className="flex w-fit  sm:h-fit  font-poppins backdrop-blur-xl h-full bg-white/30 text-white items-center justify-between">
            <h2 className=" flex pl-2  pr-2 md:pr-6 min-w-fit md:pl-8 lg:pl-20 py-3  text-white text-sm  h-full items-center justify-start border-r-2 border-r-white">News and Updates</h2>
            <div className={styles.newsCarouselWrapper}>
                <div ref={carouselRef} className={styles.newsCarousel}>
                    {/* Duplicate the news to ensure continuous scroll */}
                    {[...news, ...news, ...news, ...news].map((news, index) => (
                        <div key={index} className="text-center  text-sm font-extralight font-poppins">
                            <p>{news.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
