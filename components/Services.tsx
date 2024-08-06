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
            image: '/images/homeBG.jpg',
            altText: 'EduAid Africa',
            place: 'Africa',
            title: 'EduAid Africa',
            description: "Founded to transform African education, Edu-Aid Africa is dedicated to providing educational resources and support to underprivileged areas across Africa.",
            buttonText: "Visit EduAid Africa",
            buttonLink: '#'
        },
        {
            image: '/images/service2.jpg',
            altText: 'Service 2',
            place: 'Africa',
            title: 'New School Award',
            description: "Recognizing excellence in new educational facilities across Africa.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/service3.jpg',
            altText: 'Service 3',
            place: 'Africa',
            title: 'Advocacy Services',
            description: "Providing advocacy and support for educational rights and reforms.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/service4.jpg',
            altText: 'Service 4',
            place: 'Africa',
            title: 'Education Online',
            description: "Bringing quality education to remote areas through online platforms.",
            buttonText: "Learn More",
            buttonLink: '#'
        },
        {
            image: '/images/service5.jpg',
            altText: 'Service 5',
            place: 'Africa',
            title: 'E-Library',
            description: "Providing access to a vast collection of digital books and resources.",
            buttonText: "Explore E-Library",
            buttonLink: '#'
        }
    ];


    return (
        <section className="py-10 bg-white ">
            <div className="container mx-auto px-auto lg:px-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h2>
                <p className="text-lg text-gray-700 mb-10">Get to know SCEF and how we help strengthen Africa's educational system through our different chapters.</p>
                <div className="flex flex-wrap pl-2 h-128 justify-between">
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
