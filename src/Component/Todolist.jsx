import React, { useState } from 'react';

function TodoList() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === '' || formData.email === '') return;

    if (editingIndex !== null) {
      const updated = [...items];
      updated.splice(editingIndex, 1, formData);
      setItems(updated);
      setEditingIndex(null);
    } else {
      setItems([...items, formData]);
    }

    setFormData({ name: '', email: '' });
  };


  const startEditing = (index) => {
    setFormData(items[index]);
    setEditingIndex(index);
  };


  const handleDelete = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name} | <strong>Email:</strong> {item.email}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
