import React, { useState, useEffect } from 'react';

const NewsUpdates: React.FC = () => {
    const newsItems = [
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '6 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '6 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '6 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '6 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        {
            title: 'What Lagos must do to improve education sector – Ex-minister',
            description: 'A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.',
            time: '6 hours ago',
            link: '#',
            image: '/images/about1.png'
        },
        // Add more news items as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleNewsItems, setVisibleNewsItems] = useState(3); // Default to 3 items

    useEffect(() => {
        const updateVisibleNewsItems = () => {
            const width = window.innerWidth;
            if (width >= 1500) {
                setVisibleNewsItems(4); // Large screens
            } else if (width >= 1024) {
                setVisibleNewsItems(3);
            } else if (width >= 768) {
                setVisibleNewsItems(2); // Medium screens
            } else {
                setVisibleNewsItems(1); // Small screens
            }
        };

        // Set the initial number of visible news items
        updateVisibleNewsItems();

        // Update the number of visible news items on window resize
        window.addEventListener('resize', updateVisibleNewsItems);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateVisibleNewsItems);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex + visibleNewsItems < newsItems.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const displayedItems = () => {
        // If there are not enough items to fill the visible slots, repeat some items from the beginning
        const itemsToDisplay = newsItems.slice(currentIndex, currentIndex + visibleNewsItems);
        if (itemsToDisplay.length < visibleNewsItems) {
            return [...itemsToDisplay, ...newsItems.slice(0, visibleNewsItems - itemsToDisplay.length)];
        }
        return itemsToDisplay;
    };

    return (
        <section className="py-10 px-4 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-4">News and Updates</h2>
            <p className="text-gray-600 text-center mb-8">
                Stay updated with recent happenings and exciting news on SCEF and Education in Africa.
            </p>
            <div className="flex justify-center px-4 gap-6">
                {displayedItems().map((item, index) => (
                    <div key={index} className="bg-white w-full sm:w-100 min-h-120 rounded-lg shadow-lg h-fit">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full mb-2"
                        />

                        <div className='p-6'>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className='flex justify-between'>
                                <p className="text-gray-400 text-sm mb-4">{item.time}</p>
                                <a href={item.link} className="text-blue-600 hover:underline">
                                    Read more &rarr;
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={handlePrevious}
                    className={` border-gray-500 border-2 px-4 py-2 rounded-full  ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className={` border-gray-500 border-2 px-4 py-2 rounded-full ml-4 ${currentIndex + visibleNewsItems >= newsItems.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex + visibleNewsItems >= newsItems.length}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default NewsUpdates;
