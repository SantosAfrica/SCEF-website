
interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => (
    <section className="w-1/2 pl-20">
        <h1 className="text-7xl  font-bold font-poppins">{title}</h1>
        <p className="text-2xl  font-medium font-poppins">{subtitle}</p>
    </section>
);

export default HeroSection;
