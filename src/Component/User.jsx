import React, { useState, useRef } from "react";

export default function User() {
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", image: "" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const imageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.image) {
      alert("All fields are required including image!");
      return;
    }

    const timestamp = new Date().toLocaleString();

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = {
        ...form,
        lastActive: timestamp,
        createdAt: updated[editIndex].createdAt,
      };
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([
        ...users,
        {
          ...form,
          createdAt: timestamp,
          lastActive: timestamp,
        },
      ]);
    }

    setForm({ name: "", email: "", image: "" });
    imageInputRef.current.value = "";
    setFormVisible(false); 
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
    setFormVisible(true); 
  };

  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    setForm({ name: "", email: "", image: "" });
    imageInputRef.current.value = "";
    setFormVisible(false);
    setEditIndex(null);
  };

  
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌟 User Management System</h2>

      <button
        onClick={() => setFormVisible(true)}
        style={styles.addUserBtn}
      >
        ➕ Add User
      </button>

      {/* Search Input (Always visible) */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Form (Show only if formVisible is true) */}
      {formVisible && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleImageUpload}
            style={styles.input}
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              style={{ width: "100px", borderRadius: "50%", margin: "10px auto" }}
            />
          )}
          <button type="submit" style={styles.button}>
            {editIndex !== null ? "Update User" : "Add User"}
          </button>
        </form>
      )}

      {/* Users Table */}
      {filteredUsers.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No users found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date Added</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={user.image}
                    alt="Profile"
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastActive}</td>
                <td>
                  <button onClick={() => handleEdit(index)} style={styles.editBtn}>
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// 🎨 CSS-in-JS styles
const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "sans-serif",
    background: "#f4f4f4",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  addUserBtn: {
    background: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  editBtn: {
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    padding: "6px 8px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 8px",
    cursor: "pointer",
  },
};
