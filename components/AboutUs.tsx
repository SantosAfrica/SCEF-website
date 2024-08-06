import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => (
    <section className="py-10 h-128 flex items-center bg-white">
        <div className="container mx-auto px-6 flex flex-col">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About SCEF</h2>
            <div className="flex flex-wrap items-center lg:justify-between lg:flex-nowrap">
                <div className="w-full flex flex-col lg:w-3/6 mb-6 lg:mb-0">
                    <p className="text-lg text-gray-700 mb-4">
                        <strong>Santos Creations Educational Foundation</strong> is a membership-based NGO dedicated to revolutionizing education through technology, research, empowerment, and advocacy. We achieve our vision through continuous advocacy projects/programmes and training services that help improve and communicate a continuous ever-growing standard of formal and non-formal education in Nigeria and Africa. Through crowdfunding/fundraising and our funds management services for partners (CSR for education services) under the brand EduAid-Africa, we achieve our goals and the Sustainable Development Goal (SDG) 4.
                    </p>
                    <button className="bg-liteblue w-40 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Read more ➔
                    </button>
                </div>
                <div className="w-full lg:w-2/6 flex flex-col gap-4 flex-wrap">
                    <div className='flex'>
                        <Image src="/images/homeBG.jpg" alt="Classroom with students engaged in learning" className="w-1/2 h-auto mb-4 lg:mb-0 lg:mr-2 lg:ml-0 rounded-large rounded-tl-none" width={500} height={300} />
                        <Image src="/images/homeBG.jpg" alt="Classroom with technology" className="w-1/2 h-auto mb-4 lg:mb-0 lg:ml-2 rounded-large rounded-tr-none" width={500} height={300} />
                    </div>
                    <div className='flex'>
                        <Image src="/images/homeBG.jpg" alt="Award trophy" className="w-1/2 h-auto mb-4 lg:mb-0 lg:mr-2 lg:ml-0 rounded-large rounded-bl-none" width={500} height={300} />
                        <Image src="/images/homeBG.jpg" alt="Technology in education" className="w-1/2 h-auto mb-4 lg:mb-0 lg:ml-2 rounded-large rounded-br-none" width={500} height={300} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
