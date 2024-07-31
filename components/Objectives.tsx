
interface Objective {
    title: string;
    description: string;
}

interface ObjectivesProps {
    objectives: Objective[];
}

const Objectives: React.FC<ObjectivesProps> = ({ objectives }) => (
    <section className="">
        <h2>Our Objectives</h2>
        {objectives.map((objective, index) => (
            <div key={index} className="">
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
            </div>
        ))}
    </section>
);

export default Objectives;
