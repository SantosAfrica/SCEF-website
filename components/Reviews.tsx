import React, { useState } from 'react';
import Image from 'next/image';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const Reviews: React.FC = () => {
    const reviews = [
        {
            name: 'Mr. Kwame Mensah',
            role: 'NGO Founder • Ghana',
            image: '/images/review1.png',
            review: `As the founder of an education-focused NGO, joining NESA Africa has been a game-changer. The network, resources, and collaborative spirit have amplified our impact. NESA Africa is not just an initiative; it's a force for positive change in Ghana and across Africa.`,
            rating: 5,
        },
        {
            name: 'Prof. Fatima Jallow',
            role: 'Academic Leader • Nigeria',
            image: '/images/review1.png',
            review: `NESA Africa represents a new era for education in Nigeria. As an academic leader, being part of this initiative has opened doors to innovative partnerships and a shared vision for excellence. NESA Africa is paving the way for a brighter educational future for our country and the entire continent.`,
            rating: 5,
        },
        // Add more reviews if needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-16 bg--50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">What People are Saying</h2>
                <p className="text-gray-700 mb-8">
                    Do not take our word for it, see what others are saying about SCEF
                </p>

                <div className="relative" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="flex gap-8 overflow-hidden">  {/* Added gap-4 for spacing */}
                        {reviews.map((review, index) => (
                            <div 
                                key={index} 
                                className={`p-10 shadow-md rounded-tl-2xl flex-shrink-0 transition-transform duration-300 ease-in-out ${
                                    index === currentIndex ? 'block' : 'hidden md:block'
                                }`}
                                style={{ 
                                    width: '100%',
                                    maxWidth: '625px',
                                    height: '345px', 
                                    border: '3px solid transparent', 
                                    borderTopWidth: '3px',
                                    background: '#F8F9FF',
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                <p className="text-gray-700 mb-4">{review.review}</p>
                                <div className="flex justify-start gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-2xl" style={{
                                            background: 'linear-gradient(180deg, #ECC440 0%, #FFFA8A 34.5%, #DDAC17 70%, #FFFF95 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>★</span>
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="ml-4 text-left">
                                        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                                        <p className="text-sm text-gray-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <button onClick={prevSlide} className="text-blue-500 hover:text-blue-700">
                                <TfiArrowCircleLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="text-blue-500 hover:text-blue-700">
                                <TfiArrowCircleRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
