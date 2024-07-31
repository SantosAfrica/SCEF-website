
interface Milestone {
    year: string;
    description: string;
}

interface MilestonesProps {
    milestones: Milestone[];
}

const Milestones: React.FC<MilestonesProps> = ({ milestones }) => (
    <section className="">
        <h2>Milestones</h2>
        {milestones.map((milestone, index) => (
            <div key={index} className="">
                <h3>{milestone.year}</h3>
                <p>{milestone.description}</p>
            </div>
        ))}
    </section>
);

export default Milestones;
