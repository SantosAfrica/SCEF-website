import React, { useState } from 'react';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const countries = [
    {
        name: 'SCEF Kenya',
        description: 'Visit the Kenya official SCEF website and get involved directly',
        flag: '/images/flags/kenya.png',
        link: '#',
    },
    {
        name: 'SCEF South Africa',
        description: 'Visit the South Africa official SCEF website and get involved directly',
        flag: '/images/flags/southafrica.png',
        link: '#',
    },
    {
        name: 'SCEF Ghana',
        description: 'Visit the Ghana official SCEF website and get involved directly',
        flag: '/images/flags/ghana.png',
        link: '#',
    },
    {
        name: 'SCEF Nigeria',
        description: 'Visit the Nigeria official SCEF website and get involved directly',
        flag: '/images/flags/nigeria.png',
        link: '#',
    },
    // ... other countries ...
];

const CountriesSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? countries.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-8 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
                    <div className="w-full lg:w-[761px] mt-4 lg:mt-[107px] ml-0 lg:ml-[80px]">
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
                            SCEF in every African Country
                        </h2>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                            <p className="text-sm md:text-base text-gray-700 mb-4 lg:mb-0 lg:mr-4 lg:flex-grow">
                                SCEF is committed to reaching every corner of the African continent. Each country has a dedicated portal to manage local educational projects, ensuring tailored solutions and direct impact in every community.
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-4 mt-4 lg:mt-[107px] w-full lg:w-auto justify-end">
                        <button
                            onClick={handlePrev}
                            className="text-2xl md:text-3xl text-gray-500 hover:text-blue-500"
                        >
                            <TfiArrowCircleLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="text-2xl md:text-3xl text-gray-500 hover:text-blue-500"
                        >
                            <TfiArrowCircleRight />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {countries.map((country, index) => (
                            <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 md:p-4">
                                <div className="flex flex-col items-start p-4 md:p-6 rounded-lg w-full h-full">
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4"
                                    />
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                        {country.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 mb-4">
                                        {country.description}
                                    </p>
                                    <a
                                        href={country.link}
                                        className="bg-transparent border border-[#3277C8] text-[#3277C8] text-sm md:text-base rounded-full py-2 px-6 hover:bg-[#3277C8] hover:text-white transition-colors duration-300"
                                    >
                                        Visit their Website
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4 lg:hidden">
                    <button
                        onClick={handlePrev}
                        className="text-2xl md:text-3xl text-gray-500 hover:text-blue-500 mx-2"
                    >
                        <TfiArrowCircleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-2xl md:text-3xl text-gray-500 hover:text-blue-500 mx-2"
                    >
                        <TfiArrowCircleRight />
                    </button>
                </div>

                <div className="mt-8 text-right">
                    <a
                        href="#"
                        className="text-[#3277C8] hover:underline text-sm md:text-lg inline-block"
                        style={{ borderBottom: '1px solid currentColor' }}
                    >
                        Visit your country's Portal
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CountriesSection;