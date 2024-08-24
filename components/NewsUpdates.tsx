import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const NewsUpdates: React.FC = () => {
    const newsItems = [
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '5 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '5 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '5 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const itemsPerPage = isLargeScreen ? 3 : 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % newsItems.length
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + newsItems.length) % newsItems.length
        );
    };

    const displayedItems = isLargeScreen 
        ? newsItems.slice(currentIndex, currentIndex + itemsPerPage)
        : [newsItems[currentIndex]];
        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
                    <div className="ml-4 md:ml-8 lg:ml-16">
                        <h2 className="heading font-poppins text-3xl md:text-4xl xl:text-5xl text-blue mb-4 relative inline-block">
                            News and Updates
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></span>
                        </h2>
                        <p className="text-gray-700 mb-8 max-w-3xl">
                            Stay updated with recent happenings and exciting news on SCEF and Education in Africa.
                        </p>
                    </div>
    
                    <div className="relative">
                        {isLargeScreen && (
                            <div className="absolute -top-16 right-0 flex space-x-4">
                                <button
                                    onClick={handlePrevious}
                                    className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100"
                                >
                                    <TfiArrowCircleLeft size={40} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100"
                                >
                                    <TfiArrowCircleRight size={40} />
                                </button>
                            </div>
                        )}
                        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8">
                            {displayedItems.map((item, index) => (
                                <div key={index} className="bg-[#F8F9FF] w-full lg:w-[411px] h-[529px] rounded-tl-[16px] shadow-lg border border-[#DFE4DE]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={412}
                                        height={240}
                                        className="w-full h-[240px] object-cover"
                                    />
                                    <div className='p-6'>
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <div className='flex justify-between items-center'>
                                            <p className="text-gray-400 text-sm">{item.time}</p>
                                            <a href={item.link} className="text-blue-600 hover:underline flex items-center">
                                                Read more <TfiArrowCircleRight className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {!isLargeScreen && (
                            <div className="flex justify-center space-x-4 mt-4">
                                <button
                                    onClick={handlePrevious}
                                    className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100"
                                >
                                    <TfiArrowCircleLeft size={32} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100"
                                >
                                    <TfiArrowCircleRight size={32} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };
    
    export default NewsUpdates;