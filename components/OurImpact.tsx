interface ImpactItem {
    title: string;
    description: string;
}

interface ImpactMapProps {
    impact: ImpactItem[];
}

const OurImpact: React.FC<ImpactMapProps> = ({ impact }) => (
    <section >
        <h1 className="w-ful flex justify-center items-center text-3xl md:text-4xl font-bold text-blue-900 mb-">Our Impact</h1>
        <div className=" reletive bg-[url('/images/Map.png')] bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center min-h-64 max-h-128 px-4 sm:px-20 my-16 sm:my-10 sm:mb-20 md:py-40 md:px-4 pl-0 md:pl-16 w-full py-2 sm:py10">
            <div className="flex w-full max-w-128 justify-around sm:justify-between ">
                {impact.map((item, index) => (
                    <div
                        key={index}
                        className={`relative p-5 flex flex-col items-center gap-2 sm:gap-4`}
                    >
                        <h3 className="text-2xl md:text-4xl font-poppins font-bold">{item.description}</h3>
                        <p className="text-sm md:text-xl font-poppins">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>

    </section>
);

export default OurImpact;
