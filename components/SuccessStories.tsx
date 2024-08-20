import React from 'react';
import Image from 'next/image';

const SuccessStories: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">Success Story</h2>
                <p className="text-gray-700 mb-8">
                    Over the years SCEF has strived to become a foundation that promotes the future of education in Africa.
                </p>

                {/* Carousel */}
                <div className="relative">
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 rounded-full">
                        &#8249;
                    </button>
                    <div className="flex justify-center overflow-hidden rounded-lg">
                        <Image
                            src="/images/homeBG.jpg"
                            alt="Spelling Bee"
                            className="w-130 h-120"
                            width={600}
                            height={400}
                        />
                    </div>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 rounded-full">
                        &#8250;
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center mt-4 space-x-2">
                    {/* Replace the src in Image tags with the paths to your images */}
                    {['/images/about1.png', '/images/about2.png', '/images/about3.png'].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-16 h-16 rounded-md cursor-pointer"
                            width={64}
                            height={64}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
