import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState({ name: "", age: "", price: "" });
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState([]); 
  const [sortOrder, setSortOrder] = useState(""); 

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const info = await axios.get("http://localhost:3000/data");
      setList(info.data);
      setAllData(info.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  useEffect(() => {
    let result = [...allData];

   
    if (search.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setList(result);
  }, [search, sortOrder, allData]);

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (edit) {
        await axios.put(`http://localhost:3000/data/${edit}`, data);
        setEdit(null);
      } else {
        await axios.post("http://localhost:3000/data", data);
      }
      setData({ name: "", age: "", price: "" });
      fetchApi();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const del = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/data/${id}`);
      fetchApi();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const edi = (i) => {
    setData({ name: i.name, age: i.age, price: i.price });
    setEdit(i.id);
  };

  const cancelEdit = () => {
    setData({ name: "", age: "", price: "" });
    setEdit(null);
  };

  return (
    <div>
      <h1>CRUD with API</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      {/* Form */}
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handle}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handle}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={data.price}
          onChange={handle}
          required
        />
        <button type="submit">{edit ? "Update" : "Add"}</button>
        {edit && <button onClick={cancelEdit}>Cancel</button>}
      </form>

      {/* List */}
      <ul>
        {list.length > 0 ? (
          list.map((i) => (
            <li key={i.id}>
              {i.name} - {i.age} years - ₹{i.price}
              <button onClick={() => del(i.id)}>Delete</button>
              <button onClick={() => edi(i)}>Edit</button>
            </li>
          ))
        ) : (
          <p>No data found</p>
        )}
      </ul>
    </div>
  );
}
