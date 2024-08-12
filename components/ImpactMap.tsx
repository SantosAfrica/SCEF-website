interface ImpactItem {
    title: string;
    description: string;
}

interface ImpactMapProps {
    impact: ImpactItem[];
}

const ImpactMap: React.FC<ImpactMapProps> = ({ impact }) => (
    <section className="px-0 md:pl-6 lg:pl-16 py-10">
        <div className="flex md:justify-start justify-center">
            {impact.map((item, index) => (
                <div
                    key={index}
                    className={`relative p-5 flex flex-col items-center gap-2 sm:gap-4 ${index > 0 ? '' : ''}`}
                >
                    {index > 0 && (
                        <div className="absolute left-0 top-0 bottom-0 w-0.5">
                            <div
                                className="absolute left-0 border-l-2 border-white"
                                style={{ height: '65%', top: '20%' }}
                            />
                        </div>
                    )}
                    <h3 className="text-2xl md:text-4xl font-poppins font-bold">{item.description}</h3>
                    <p className="text-sm md:text-xl font-poppins">{item.title}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ImpactMap;
