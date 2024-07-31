
const DonateForm: React.FC = () => (
    <section className="">
        <h2>Donate</h2>
        <form>
            <label>
                Amount:
                <input type="number" name="amount" />
            </label>
            <button type="submit">Donate</button>
        </form>
    </section>
);

export default DonateForm;
