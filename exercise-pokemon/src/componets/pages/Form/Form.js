import "./Form.scss";

const Form = () => {

    return (
        <section className="Form">
        <h3>Create New Pokemon</h3>
        <form>
            <div className="wrapperForm">
            <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="wrapperForm">
            <input type="text" name="image" placeholder="Image Url" required />
            </div>
            <div className="wrapperForm">
            <select required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            </div>
            <div className="wrapperForm">
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            </div>
            <button type="submit">Add</button>
        </form>
        </section>
    );
};

export default Form;
