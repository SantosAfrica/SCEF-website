import Header from '../components/Header';
import Footer from '../components/Footer';
import Objectives from '../components/Objectives';
import Milestones from '../components/Milestones';

const About: React.FC = () => {
    const objectives = [
        {
            title: 'Expand Access',
            description: 'Ensure that all children have access to quality education.',
        },
        {
            title: 'Improve Quality',
            description: 'Improve the quality of education through better resources and teacher training.',
        },
        {
            title: 'Foster Innovation',
            description: 'Encourage innovative teaching methods and curriculum.',
        },
    ];


    const milestones = [
        {
            year: '2010',
            description: 'Founded the organization.',
        },
        {
            year: '2012',
            description: 'Built the first school in Nigeria.',
        },
        {
            year: '2016',
            description: 'Reached 50,000 students across Africa.',
        },
        {
            year: '2020',
            description: 'Trained 3,000 teachers in innovative teaching methods.',
        },
    ];


    return (
        <div className="flex md:flex-col gap-4">
            <Header />
            <Objectives objectives={objectives} />
            <Milestones milestones={milestones} />
            <Footer />
        </div>
    );
};

export default About;
