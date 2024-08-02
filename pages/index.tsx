import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import ImpactMap from '../components/ImpactMap';
import Partners from '../components/Partners';

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

    const partners = [
        {
            logo: '/images/GET2.png',
            name: 'GET2',
        },
        {
            logo: '/images/RON 2.png',
            name: 'RON 2',
        },
        {
            logo: '/images/CV+HR 1.png',
            name: 'CV+HR',
        },
        {
            logo: '/images/RON1.png',
            name: 'RON1',
        },
        {
            logo: '/images/GETS 1.png',
            name: 'GETS1',
        },
        {
            logo: '/images/PRS1.png',
            name: 'PRS1',
        },
    ];

    return (
        <div className="relative w-full bg-[url('/images/homeBG.jpg')] bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="text-white relative z-10">
                <Header />
                <main className="relative z-10">
                    <HeroSection title="Empowering Africa Through Education for All" subtitle='"Innovating for a Brighter Tomorrow in Nigeria and Across Africa"' />
                    <ImpactMap impact={impact} />
                    <Partners partners={partners} />
                </main>
            </div>
        </div>
    );
};

export default Home;
