import { useState } from "react";
import './form.css';

const Form = () => {

    const [field, setField] = useState([
        { id: 1, type: "text", placeholder: "Enter Feature1" },
        { id: 2, type: "text", placeholder: "Enter Feature2" },
        { id: 3, type: "text", placeholder: "Enter Feature3" },
    ])

    const addNewField = (e) => {
        e.preventDefault();
        setField([...field, { id: field.length + 1, type: "text", placeholder: `Enter Feature${field.length+1}` }]);
    }

    return (
        <>
            <form>
                <h2>Key Features</h2>
                {
                    field.map((f) => (
                        <input key={f.id} type={f.type} placeholder={f.placeholder} />
                    ))
                }
                <button onClick={addNewField}>Add New Input Box</button>
            </form>
        </>
    )
}

export default Form;