interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => (
    <section className="pl-4  md:pl-20 pt-8 md:pt-20 w-full text-center md:text-left">
        <h1 className="text-4xl pt-32 md:pb-10 md:text-7xl leading-relaxed font-bold font-poppins mx-auto md:max-w-md max-w-super">
            {title}
        </h1>
        <p className="text-lg md:text-2xl pt-4 md:pt-4 font-medium font-poppins mx-auto md:mx-0 max-w-screen-md">
            {subtitle}
        </p>
        <div className="flex pl-20 pt-8 md:gap-6 justifycenter md:flex-row md:pt-8">
            <button className='w-1/3 md:w-40 h-12 text-sm border-2 flex items-center justify-center border-liteblue rounded-full text-white bg-liteblue'>
                Join us today
            </button>
            <button className="flex items-center justify-center gap-4 font-poppins text-sm w-full md:w-auto mt-4 md:mt-0">
                <img className="h-4" src="/images/info_i.png" alt="info logo" />
                Learn more
            </button>
        </div>
    </section>
);

export default HeroSection;
