
interface ImpactItem {
    title: string;
    description: string;
}

interface ImpactMapProps {
    impact: ImpactItem[];
}

const ImpactMap: React.FC<ImpactMapProps> = ({ impact }) => (
    <section className="py-5 flex">
        <div className="flex">
            {impact.map((item, index) => (
                <div
                    key={index}
                    className={`relative p-5 flex flex-col gap-2 ${index > 0 ? '' : ''
                        }`}
                >
                    {index > 0 && (
                        <div className="absolute left-0 top-0 bottom-0 w-0.5">
                            <div
                                className="absolute left-0 border-l-2 border-black"
                                style={{ height: '35%', top: '30%' }}
                            />
                        </div>
                    )}
                    <h3 className="text-3xl font-bold">{item.description}</h3>
                    <p className="text-sm">{item.title}</p>
                </div>
            ))}
        </div>
    </section>
);



export default ImpactMap;
