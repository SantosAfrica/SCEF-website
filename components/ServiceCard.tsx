// components/ServiceCard.tsx
import React from 'react';
import classNames from 'classnames';

interface ServiceCardProps {
    image: string;
    altText: string;
    place: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    isExpanded: boolean;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    image,
    altText,
    place,
    title,
    description,
    buttonText,
    buttonLink,
    isExpanded,
    onClick
}) => {
    return (
        <div
            className={classNames(
                'transition-all duration-500 bg-cover bg-center rounded-lg shadow-lg overflow-hidden',
                { ' w-14 sm:w-20 md:w-32 lg:w-40 mx-1 lg:h-128 cursor-pointer': !isExpanded },
                { ' w-3/6 md:w-6/12 lg:w-6/12 lg:h-128': isExpanded }
            )}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
            title={altText} // to provide alternative text for accessibility
        >
            <div className="bg-gradient-to-t from-liteblue bg-opacity-10 h-full flex flex-col justify-end p-4 ">
                <h3
                    className={classNames(
                        'text-sm sm:text-2xl font-bold mb-2 text-white',
                        { 'transform -rotate-90 -translate-y-14 -translate-x-1 whitespace-nowrap': !isExpanded },
                        { 'rotate-0': isExpanded }
                    )}
                >
                    <p>{title}</p>
                    <p className='font-thin '>{place}</p>
                </h3>
                {isExpanded && (
                    <>
                        <p className="text-white text-sm sm:text-lg">{description}</p>
                        <a href={buttonLink} className="bg-blue-500 text-sm sm:text-lg text-white px-2 py-2 rounded-full inline-block">{buttonText}</a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
