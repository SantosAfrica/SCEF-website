/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
    // Start with the first card expanded by default
    const [expandedCard, setExpandedCard] = useState<number>(0);

    const handleCardClick = (index: number) => {
        setExpandedCard(index);
    };

    const services = [
        {
            image: '/images/about1.png',
            altText: 'EduAid Africa',
            place: 'Africa',
            title: 'EduAid Africa',
            description: "Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to underprivileged areas across Africa.",
            buttonText: "Visit EduAid Africa",
            buttonLink: '#'
        },
        {
            image: '/images/about2.png',
            altText: 'Service 2',
            place: 'Africa',
            title: 'New School Award',
            description: "Recognizing excellence in new educational facilities across Africa.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/about3.png',
            altText: 'Service 3',
            place: 'Africa',
            title: 'Advocacy Services',
            description: "Providing advocacy and support for educational rights and reforms.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/about4.png',
            altText: 'Service 4',
            place: 'Africa',
            title: 'Education Online',
            description: "Bringing quality education to remote areas through online platforms.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/homeBG.jpg',
            altText: 'Service 5',
            place: 'Africa',
            title: 'E-Library',
            description: "Providing access to a vast collection of digital books and resources.",
            buttonText: "Explore E-Library",
            buttonLink: '#'
        }
    ];


    return (
        <section className="py-10 mb-40 md:mb-16  bg-white px-6 lg:px-20">
            <div className="container  ">
                <h2 className="heading w-fit font-poppins text-3xl md:text-4xl xl:text-5xl text-blue">Our Services</h2>
                <p className="text-lg  text-gray-700 mb-10">Get to know SCEF and how we help strengthen Africa's educational system through our different chapters.</p>
                <div className="w-full flex px-0 lg:px-6 h-72 md:h-128 justify-center">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            altText={service.altText}
                            place={service.place}
                            title={service.title}
                            description={service.description}
                            buttonText={service.buttonText}
                            buttonLink={service.buttonLink}
                            isExpanded={expandedCard === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
