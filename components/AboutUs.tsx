// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => (
    <section className="py-10 h-128 flex items-center bg-white">
        <div className="container mx-6 px-6 flex flex-col ">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About SCEF</h2>
            <div className="flex flex-wrap items-center lg:justify-between lg:flex-nowrap">
                <div className="w-full lg:w-3/6 mb-6 lg:mb-0">
                    <p className="text-lg text-gray-700 mb-4">
                        <strong>Santos Creations Educational Foundation</strong> is a membership-based NGO dedicated to revolutionizing education through technology, research, empowerment, and advocacy. We achieve our vision through continuous advocacy projects/programmes and training services that help improve and communicate a continuous ever-growing standard of formal and non-formal education in Nigeria and Africa. Through crowdfunding/fundraising and our funds management services for partners (CSR for education services) under the brand EduAid-Africa, we achieve our goals and the Sustainable Development Goal (SDG) 4.
                    </p>
                    <button className="bg-blue-500 text-white px-4  rounded-full ">Read more ➔</button>
                </div>
                <div className="w-full lg:w-2/6 flex flex-col gap-4 -wrap justify-between">
                    <div className='flex'>
                        <img src="/images/homeBG.jpg" alt="Education 1" className="w-1/2 h-auto mb-4 lg:mb-0 lg:mr-2 lg:ml-0 rounded-large rounded-tl-none" />
                        <img src="/images/homeBG.jpg" alt="Education 2" className="w-1/2 auto mb-4 lg:mb-0 lg:ml-2 rounded-large rounded-tr-none" />

                    </div>
                    <div className='flex '>
                        <img src="/images/homeBG.jpg" alt="Trophy" className="w-1/2 auto mb-4 lg:mb-0 lg:mr-2 lg:ml-0 rounded-large rounded-bl-none" />
                        <img src="/images/homeBG.jpg" alt="Technology" className="w-1/2 auto mb-4 lg:mb-0 lg:ml-2 rounded-large rounded-br-none" />

                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
