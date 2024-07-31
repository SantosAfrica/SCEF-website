
interface Service {
    title: string;
    description: string;
}

interface ServicesProps {
    services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => (
    <section className="">
        {services.map((service, index) => (
            <div key={index} className="">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        ))}
    </section>
);

export default Services;
