import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => (
    <section className="pl-4  md:pl-20 pt-8 md:pt-8 w-full text-center md:text-left">
        <h1 className="text-4xl pt-28 md:pb-10 md:text-7xl leading-relaxed font-bold font-poppins max-w-super">
            {title}
        </h1>
        <p className="text-lg md:text-2xl pt-4 md:pt-4 font-medium font-poppins mx-auto md:mx-0  max-w-des ">
            {subtitle}
        </p>
        <div className="pt-8  flex gap-8 place-items-center justify-center md:justify-start md:pl-0">
            <button className='max-w-100px w-40 h-12 text-sm border-2 flex items-center justify-center border-liteblue rounded-full text-white bg-liteblue'>
                Join us today
            </button>
            <button className="max-w-100px w-40 flex items-center  justify-center gap-4 font-poppins text-sm  md:w-auto mt-4 md:mt-0">
                <Image className="h-4" src="/images/info_i.png" alt="info logo"
                    width={3} // Adjust width as needed
                    height={16} // Adjust height as needed 
                />
                Learn more
            </button>
        </div>
    </section>
);

export default HeroSection;
