import React from 'react';
import Image from 'next/image';

const Reviews: React.FC = () => {
    const reviews = [
        {
            name: 'Mr. Kwame Mensah',
            role: 'NGO Founder • Ghana',
            image: '/images/review1.png',
            review: `As the founder of an education-focused NGO, joining NESA Africa has been a game-changer. The network, resources, and collaborative spirit have amplified our impact. NESA Africa is not just an initiative; it’s a force for positive change in Ghana and across Africa.`,
            rating: 5,
        },
        {
            name: 'Prof. Fatima Jallow',
            role: 'Academic Leader • Nigeria',
            image: '/images/review1.png',
            review: `NESA Africa represents a new era for education in Nigeria. As an academic leader, being part of this initiative has opened doors to innovative partnerships and a shared vision for excellence. NESA Africa is paving the way for a brighter educational future for our country and the entire continent.`,
            rating: 5,
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-left">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">What People are Saying</h2>
                <p className="text-gray-700 mb-8">
                    Do not take our word for it, See what others are saying about SCEF.
                </p>

                <div className="flex justify-center gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-6 w-100 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 mb-4">{review.review}</p>
                            <div className="flex justify-start gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow text-2xl">&#9733;</span>
                                ))}
                            </div>
                            <div className="flex items-center my-4">
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

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button className="bg-gray-300 p-2 rounded-full">&#8249;</button>
                    <button className="bg-gray-300 p-2 rounded-full">&#8250;</button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
