import HeroSection from '../components/HeroSection';
import ImpactMap from '../components/ImpactMap';
import Partners from '../components/Partners';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import News from '../components/News';
import OurImpact from '../components/OurImpact';
import GetInvolved from '../components/GetInvolved';
import NewsUpdates from '../components/NewsUpdates';
import SuccessStories from '@/components/SuccessStories';
import Reviews from '@/components/Reviews';
import CountriesSection from '@/components/CountriesSection';

const Home: React.FC = () => {
    const services = [
        {
            title: 'Quality Education',
            description: 'Providing high-quality education to children in Africa.',
        },
        {
            title: 'Teacher Training',
            description: 'Training teachers to deliver the best education.',
        },
        {
            title: 'Educational Resources',
            description: 'Supplying schools with essential educational materials.',
        },
    ];

    const impact = [
        {
            title: 'Student Reached',
            description: '15k+',
        },
        {
            title: 'Partners',
            description: '500+',
        },
        {
            title: 'Awarded leaders',
            description: '300+',
        },
    ];

    const ourImpact = [
        {
            title: 'Chapters',
            description: '4',
        },
        {
            title: 'Volunteers',
            description: '200+',
        },
        {
            title: 'Africans helped',
            description: '3,000+',
        },
    ];

    const news = [
        {
            description: 'Nomination for NESA Nigeria award 2024 hosted by SCEF will be open starting from july 2024',
        },
        {
            description: 'Eduaid Africa has been recorded as one of the crowdfunding playform that has supported the growth and empowerment of education for all in Africa',
        },

    ];
    const partners = [
        {
            logo: '/images/GET2.svg',
            name: 'GET2',
        },
        {
            logo: '/images/RON 2.svg',
            name: 'RON 2',
        },
        {
            logo: '/images/CV+HR 1.svg',
            name: 'CV+HR',
        },
        {
            logo: '/images/RON1.svg',
            name: 'RON1',
        },
        {
            logo: '/images/GETS 1.svg',
            name: 'GETS1',
        },
        {
            logo: '/images/PRS 1.svg',
            name: 'PRS1',
        },
    ];

    return (
        <div className="flex flex-col font-poppins">

            <div className="text-white z-10 relative  min-h-full bg-[url('/images/homeBG.jpg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <News news={news} />
                <main className="relative z-10">
                    <HeroSection title="Empowering Africa Through Education for All" subtitle='"Innovating for a Brighter Tomorrow in Nigeria and Across Africa"' />
                    <ImpactMap impact={impact} />
                    <Partners partners={partners} />
                </main>
            </div>
            <div className='h-full min-h-128'>
                <AboutUs />
            </div>
            <div className='h-full min-h-128'>
                <Services />
            </div>
            <div className="h-full">
                <OurImpact impact={ourImpact} />
            </div>
            <div className="h-fit min-h-128">
                <GetInvolved />
            </div>
            <div className="h-full min-h-128">
                <NewsUpdates />
            </div >
            <div className="h-full min-h-128">
                <SuccessStories />
            </div>
            <div>
                <Reviews />
            </div>
            <div>
                <CountriesSection />
            </div>
        </div>
    );
};

export default Home;
