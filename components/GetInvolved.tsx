import React, { useState, useEffect } from 'react';

const GetInvolved: React.FC = () => {
    const cards = [
        {
            title: 'Volunteer!',
            description: 'Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to underprivileged areas across Africa.',
            image: '/images/about1.png',
        },
        {
            title: 'Donate!',
            description: 'Support our mission by donating to provide educational resources, scholarships, and infrastructure improvements in underserved regions.',
            image: '/images/about1.png',
        },
        {
            title: 'Partner!',
            description: 'Join us as a partner to amplify our impact and bring sustainable change to the education sector in Africa.',
            image: '/images/about1.png',
        },
        {
            title: 'Sponsor!',
            description: 'Become a sponsor and help us achieve our goals by providing financial or in-kind support to our initiatives.',
            image: '/images/about1.png',
        },
        // Add more cards as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4); // Default to 4 cards

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width >= 1500) {
                setVisibleCards(1); // Large screens
            } else if (width >= 1024) {
                setVisibleCards(1); // Large screens
            } else if (width >= 768) {
                setVisibleCards(1);// Medium screens
            } else {
                setVisibleCards(1);// Small screens
            }
        };

        // Set the initial number of visible cards
        updateVisibleCards();

        // Update the number of visible cards on window resize
        window.addEventListener('resize', updateVisibleCards);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex + visibleCards < cards.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const displayedCards = () => {
        // If there are not enough cards to fill the visible slots, repeat some cards from the beginning
        const itemsToDisplay = cards.slice(currentIndex, currentIndex + visibleCards);
        if (itemsToDisplay.length < visibleCards) {
            return [...itemsToDisplay, ...cards.slice(0, visibleCards - itemsToDisplay.length)];
        }
        return itemsToDisplay;
    };

    return (
        <section className="pb-10 px-4 bg-white">
            <h2 className="text-2xl font-bold text-center mb-4">Get Involved</h2>
            <p className="text-gray-600 text-center mb-8">
                Make a change in Africa through education by getting involved directly with Santos Creations Educational Foundation.
            </p>
            <div className=" flex  lg:p-40 gap-2 justify-between items-center text-center mt-6">
                <button
                    onClick={handlePrevious}
                    className={` border-gray-500 border-2 h-fit w-fit px-4 py-2 rounded-full  ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                >
                    &lt;
                </button>

                <div className="flex justify-center  gap-6">
                    {displayedCards().map((card, index) => (
                        <div key={index} className=" flex flex-col h-110 w-full sm:h-130 sm:w-124 text-white bg-liteblue rounded-lg shadow-lg p-6  transform transition-all duration-300">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="rounded-lg mb-4"
                            />

                            <div className='flex flex-col justify-between flex-grow'>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                    <p className="mb-4">{card.description}</p>
                                </div>
                                <button className=" w-fit bg-liteblue border-2 border-white py-2 px-4 rounded-lg mt-4">
                                    Get Involved
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className={` border-gray-500 h-fit w-fit border-2 px-4 py-2 rounded-full ${currentIndex + visibleCards >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex + visibleCards >= cards.length}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default GetInvolved;
