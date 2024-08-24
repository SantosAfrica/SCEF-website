import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const SuccessStories: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/images/spelling-bee.png",
        "/images/thumbnail-1.png",
        "/images/thumbnail-1.png",
        "/images/thumbnail-1.png",
        "/images/thumbnail-1.png",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (e.key === 'ArrowLeft') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
                <div className="ml-4 md:ml-8 lg:ml-16">
                    <h2 className="heading font-poppins text-3xl md:text-4xl xl:text-5xl text-blue mb-4 relative inline-block">
                        Success Story
                        <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></span>
                    </h2>
                    <p className="text-gray-700 mb-8 max-w-3xl">
                        Over the years SCEF has strived to become a foundation that promotes the future of education in Africa.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center">
                    <button className="hidden lg:block absolute left-0 transform -translate-x-full text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100" onClick={prevImage}>
                        <TfiArrowCircleLeft size={40} />
                    </button>
                    <div className="w-full max-w-[1110px] mx-auto">
                        <div className="flex justify-center overflow-hidden rounded-[32px] sm:rounded-lg">
                            <Image
                                src={images[currentIndex]}
                                alt="Success Story"
                                width={1110}
                                height={500}
                                className="object-cover w-full h-auto rounded-[32px] sm:rounded-lg"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    aspectRatio: '1110 / 500',
                                }}
                            />
                            <div className="absolute bottom-8 left-8 text-white text-lg md:text-2xl font-bold">
                                Spelling Bee Organized for Public<br />
                                school students in partnership with<br />
                                MTN Nigeria
                            </div>
                        </div>
                    </div>
                    <button className="hidden lg:block absolute right-0 transform translate-x-full text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100" onClick={nextImage}>
                        <TfiArrowCircleRight size={40} />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex flex-col items-center mt-4">
                    <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto mb-4">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={200}
                                height={120}
                                className={`rounded-xl border-t-4 ${
                                    index === currentIndex ? 'border-blue-500' : 'border-transparent'
                                } w-24 sm:w-32 md:w-40 lg:w-48 h-auto cursor-pointer`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center space-x-4 lg:hidden">
                        <button className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100" onClick={prevImage}>
                            <TfiArrowCircleLeft size={32} />
                        </button>
                        <button className="text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100" onClick={nextImage}>
                            <TfiArrowCircleRight size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
