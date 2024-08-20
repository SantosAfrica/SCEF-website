import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GetInvolved: React.FC = () => {
    const cards = [
        {
            title: 'Volunteer',
            description: 'Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to underprivileged areas across Africa.',
            image: '/images/volunteer.svg',
        },
        {
            title: 'Membership',
            description: 'Support our mission by donating to provide educational resources, scholarships, and infrastructure improvements in underserved regions.',
            image: '/images/membership.svg',
        },
        {
            title: 'Partnership',
            description: 'Join us as a partner to amplify our impact and bring sustainable change to the education sector in Africa.',
            image: '/images/partnership.svg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            // Adjust card visibility based on screen width
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);

        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const displayedCards = () => {
        const itemsToDisplay = cards.slice(currentIndex, currentIndex + 1);
        return itemsToDisplay;
    };

    return (
        <section className="pb-10 px-8 lg:px-20 bg-white flex flex-col items-center">
            <h2 className="heading w-fit font-poppins text-3xl md:text-4xl xl:text-5xl text-blue mb-4 text-center">
                Get Involved
            </h2>
            <p className="text-gray-600 w-110 mb-8 text-center">
                Make a change in Africa through education by getting involved directly with Santos Creations Educational Foundation.
            </p>
            <div className="relative flex justify-center items-center w-full mt-6">
                <button
                    onClick={handlePrevious}
                    className={`absolute left-4 md:left-8 lg:left-16 z-10 border-gray-500 border-2 h-fit w-fit px-4 py-2 rounded-full bg-white ${cards.length > 1 ? '' : 'hidden'
                        }`}
                >
                    &lt;
                </button>

                <div className="flex justify-center gap-6">
                    {displayedCards().map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col relative items-center py-6 h-auto w-full sm:h-130 sm:w-124 sm:py-20 text-white bg-liteblue rounded-2xl shadow-lg p-6 transform transition-all duration-500"
                            style={{
                                transform: ` translateY(${(currentIndex) * 1}%)`,

                                zIndex: cards.length - index,
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="mb-4 h-32 sm:h-52"
                            />
                            <div className="flex sm:p-4 sm:px-8 flex-col items-center gap-6 sm:gap-16 flex-grow">
                                <div className="flex flex-col gap-8">
                                    <h3 className="text-4xl text-yellow font-bold mb-2 border-b-2 pb-6">
                                        {card.title}
                                    </h3>
                                    <p className="mb-4">{card.description}</p>
                                </div>
                                <button className="w-fit bg-liteblue border-2 border-white py-2 px-4 rounded-lg mt-4">
                                    Get Involved
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className={`absolute right-4 md:right-8 lg:right-16 z-10 border-gray-500 border-2 h-fit w-fit px-4 py-2 rounded-full bg-white ${cards.length > 1 ? '' : 'hidden'
                        }`}
                >
                    &gt;
                </button>
            </div>

            <div className="mt-6 flex justify-center gap-4 md:hidden">
                <button
                    onClick={handlePrevious}
                    className="border-gray-500 border-2 h-fit w-fit px-4 py-2 rounded-full bg-white"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="border-gray-500 border-2 h-fit w-fit px-4 py-2 rounded-full bg-white"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default GetInvolved;
