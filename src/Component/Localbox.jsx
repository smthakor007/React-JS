import React, { useEffect, useState } from 'react';

export default function Localbox() {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || [];
    });
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(todo));
    }, [todo]);

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleAddTask() {
        if (task.trim() === '') return;

        if (editIndex !== null) {
            const updatedTodos = [...todo];
            updatedTodos[editIndex] = task;
            setTodo(updatedTodos);
            setEditIndex(null);
        } else {
            setTodo([...todo, task]);
        }
        setTask('');
    }

    function handleDelete(index) {
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    }

    function handleEdit(index) {
        setTask(todo[index]);
        setEditIndex(index);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h1> Todo List </h1>

            <input
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={handleChange}
                style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />

            <button onClick={handleAddTask} style={{ padding: '10px 20px' }}>
                {editIndex !== null ? 'Update' : 'Add'}
            </button>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {todo.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {item}
                        <button
                            onClick={() => handleEdit(index)}
                            style={{ marginLeft: '10px', padding: '5px 10px' }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(index)}
                            style={{ marginLeft: '5px', padding: '5px 10px' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
