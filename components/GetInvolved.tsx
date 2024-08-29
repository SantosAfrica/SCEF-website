import React, { useState } from 'react';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const GetInvolved: React.FC = () => {
    const cards = [
        {
            title: 'Volunteer!',
            description: 'Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to underprivileged areas across Africa. Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to',
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

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <section className="pb-10 px-4 md:px-8 lg:px-20 bg-white">
            <h2 className="heading font-poppins text-3xl md:text-4xl xl:text-5xl text-blue-900 mb-2 text-left relative inline-block">
                Get Involved
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mb-16 text-left mt-4">
                Make a change in Africa through education by getting involved directly with Santos Creations Educational Foundation.
            </p>
            <div className="relative w-full max-w-[585px] mx-auto mt-24">
                <div className="relative h-[670px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 rounded-t-3xl shadow-lgoverflow-hidden transition-all duration-500 ${index === currentIndex ? 'z-30' : index === (currentIndex + 1) % cards.length ? 'z-20' : 'z-10'
                                }`}
                            style={{
                                width: index === currentIndex ? '100%' : index === (currentIndex + 1) % cards.length ? '93%' : '84%',
                                height: '670px',
                                top: index === currentIndex ? '0' : index === (currentIndex + 1) % cards.length ? '-35px' : '-70px',
                                left: index === currentIndex ? '0' : index === (currentIndex + 1) % cards.length ? '3.5%' : '8%',
                                backgroundColor: '#3366CC',
                                borderTop: '4px solid #2255BB',
                            }}
                        >
                            {index === currentIndex && (
                                <div className="p-6 text-white h-fit flex flex-col my-24 items-center justify-between">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-40 object-contain mb-4"
                                    />
                                    <h3 className="text-3xl font-bold mb-4 text-center px-2 py-1" style={{ color: '#FFD700' }}>{card.title}</h3>
                                    <div className="w-full h-px bg-white my-4"></div>
                                    <p className="mb-6 text-sm flex-grow text-center">{card.description}</p>
                                    <button className="w-[182px] h-[48px] bg-transparent border-2 border-white py-2 px-8 rounded-3xl mt-auto">
                                        {card.title === 'Volunteer!' ? 'Volunteer Now' : 'Get Involved'}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden md:block">
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full text-gray-500 text-3xl"
                        style={{
                            width: '72px',
                            height: '72px',
                            padding: '14.4px',
                            borderRadius: '180px 0px 0px 0px',
                            border: '2.7px solid transparent',
                        }}
                    >
                        <TfiArrowCircleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-gray-500 text-3xl"
                        style={{
                            width: '72px',
                            height: '72px',
                            padding: '14.4px',
                            borderRadius: '180px 0px 0px 0px',
                            border: '2.7px solid transparent',
                        }}
                    >
                        <TfiArrowCircleRight />
                    </button>
                </div>
                <div className="flex justify-center mt-4 md:hidden">
                    <button
                        onClick={handlePrevious}
                        className="text-gray-500 text-3xl mr-4"
                        style={{
                            width: '72px',
                            height: '72px',
                            padding: '14.4px',
                            borderRadius: '180px 0px 0px 0px',
                            border: '2.7px solid transparent',
                        }}
                    >
                        <TfiArrowCircleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-gray-500 text-3xl ml-4"
                        style={{
                            width: '72px',
                            height: '72px',
                            padding: '14.4px',
                            borderRadius: '180px 0px 0px 0px',
                            border: '2.7px solid transparent',
                        }}
                    >
                        <TfiArrowCircleRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;