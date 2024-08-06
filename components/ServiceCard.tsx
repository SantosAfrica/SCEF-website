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
                { 'w-40 h-128 cursor-pointer': !isExpanded },
                { 'w-120 h-128': isExpanded }
            )}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
            title={altText} // to provide alternative text for accessibility
        >
            <div className="bg-gradient-to-t from-liteblue bg-opacity-10 h-full flex flex-col justify-end p-4">
                <h3
                    className={classNames(
                        'text-2xl font-bold mb-2 text-white',
                        { 'transform -rotate-90 -translate-y-14 -translate-x-10 whitespace-nowrap': !isExpanded },
                        { 'rotate-0': isExpanded }
                    )}
                >
                    <p>{title}</p>
                    <p className='font-thin font-poppins'>{place}</p>
                </h3>
                {isExpanded && (
                    <>
                        <p className="text-white mb-">{description}</p>
                        <a href={buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block">{buttonText}</a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
