import React, { useState } from 'react';

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
        flag: '/images/flags/Ghana.png',
        link: '#',
    },
    {
        name: 'SCEF Nigeria',
        description: 'Visit the Nigeria official SCEF website and get involved directly',
        flag: '/images/flags/nigeria.png',
        link: '#',
    },
    {
        name: 'SCEF Egypt',
        description: 'Visit the Egypt official SCEF website and get involved directly',
        flag: '/images/flags/kenya.png',
        link: '#',
    },
    {
        name: 'SCEF Tanzania',
        description: 'Visit the Tanzania official SCEF website and get involved directly',
        flag: '/images/flags/kenya.png',
        link: '#',
    },
    {
        name: 'SCEF Uganda',
        description: 'Visit the Uganda official SCEF website and get involved directly',
        flag: '/images/flags/kenya.png',
        link: '#',
    },
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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">SCEF in every African Country</h2>
                <div className='flex justify-center items-center'>
                    <p className="flex w-3/4 text-gray-700 text-left mb-8">
                        SCEF is committed to reaching every corner of the African continent. Each country has a dedicated portal to manage local educational projects, ensuring tailored solutions and direct impact in every community.
                    </p>
                    <div className='flex  h-fit justify-center items-center w-1/4 gap-3'>
                        <button
                            onClick={handlePrev}
                            className=" px-7 h-16 border black rounded-full"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={handleNext}
                            className=" px-7 h-16 border black rounded-full"
                        >
                            &#8250;
                        </button>
                    </div>

                </div>

                <div className="relative overflow-hidden mx-10">
                    <div className="flex justify-start space-x-8 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {countries.map((country, index) => (
                            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <div className="flex flex-col items-left  p-6 rounded-lg w-64 h-full">
                                    <img src={country.flag} alt={country.name} className="w-16 h-16 rounded-full mb-4" />
                                    <h3 className="text-xl text-left font-semibold text-gray-800">{country.name}</h3>
                                    <p className="text-gray-500 text-left mb-4">{country.description}</p>
                                    <a
                                        href={country.link}
                                        className="bg-transparent border border-liteblue text-liteblue rounded-full py-2 px-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                    >
                                        Visit their Website
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Link to Portal */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="text-liteblue hover:underline text-lg"
                    >
                        Visit your country’s Portal
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CountriesSection;
