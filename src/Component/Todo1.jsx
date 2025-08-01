import React, { useState } from 'react';

function Counter() {
  const [state, setstate] = useState('');
  const [text, settext] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handaletext(e) {
    setstate(e.target.value);
  }

  function handalesubmit(e) {
    e.preventDefault();
    if (state.trim() === '') return;

    const updated = [...text];

    if (editIndex !== null) {

      updated.splice(editIndex, 1, state);
      settext(updated);
      setEditIndex(null);
    } else {
      updated.push(state);
      settext(updated);
    }

    setstate('');
  }

  function handleDelete(index) {
    const updated = [...text];
    updated.splice(index, 1);
    settext(updated);
  }

  function handleEdit(index) {
    setstate(text[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1> Todo List</h1>
      <form onSubmit={handalesubmit}>
        <input
          type="text"
          value={state}
          onChange={handaletext}
        />
        <button type="submit">
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul>
        {text.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
