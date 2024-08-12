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
                { ' w-14 sm:w-20 md:w-32 lg:w-40 mx-1 h-100 md:h-128 cursor-pointer': !isExpanded },
                { ' w-3/6 md:w-6/12 lg:w-6/12 h-100 md:h-128': isExpanded }
            )}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
            title={altText} // to provide alternative text for accessibility
        >
            <div className="bg-gradient-to-t from-liteblue  h-full flex flex-col justify-end p-4 ">
                <h3
                    className={classNames(
                        'text-sm sm:text-2xl font-bold mb-2 text-white',
                        { 'transform -rotate-90 -translate-y-0 -translate-x-0 md:-translate-y-10 md:-translate-x-4 whitespace-nowrap': !isExpanded },
                        { 'rotate-0': isExpanded }
                    )}
                >
                    <p>{title}</p>
                    <p className='font-thin '>{place}</p>
                </h3>
                {isExpanded && (
                    <>
                        <p className="text-white text-sm sm:text-lg">{description}</p>
                        <a href={buttonLink} className="flex justify-center items-center text-xs font-bold sm:text-sm text-blue w-fit sm:w-40 px-1 mt-6 my-2 sm:px-2 py-2 bg-white rounded-full ">{buttonText}</a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
