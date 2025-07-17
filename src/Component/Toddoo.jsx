import React, { useState } from 'react';

export default function Toddoo() {
    const [state, setState] = useState({ name: "", password: "" });
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function handleText(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (editIndex === null) {
            setList([...list, state]);
        } else {
            const updated = [...list];
            updated[editIndex] = state;
            setList(updated);
            setEditIndex(null);
        }

        setState({ name: "", password: "" });
    }

    function handleEdit(index) {
        setState(list[index]);
        setEditIndex(index);
    }

    function handleDelete(index) {
        const updated = list.filter((_, i) => i !== index);
        setList(updated);
        if (editIndex === index) {
            setState({ name: "", password: "" });
            setEditIndex(null);
        }
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleText}
                    placeholder="Name"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleText}
                    placeholder="Password"
                />
                <br />
                <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
            </form>

            <h3>List</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.password}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
