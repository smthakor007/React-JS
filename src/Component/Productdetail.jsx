// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Productdetail() {
//   const [text, setText] = useState({
//     id: "",
//     name: "",
//     price: ""
//   });
//   const [product, setProduct] = useState([]);
//   const [edit, setEditId] = useState(null);

  
//   const fetchApi = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/product");
//       setProduct(res.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   function AddText(e) {
//     setText({ ...text, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (edit) {
//         await axios.put(`http://localhost:5000/product/${edit}`, text);
//         setEditId(null);
//       } else {
//         await axios.post("http://localhost:5000/product", text);
//       }
//       fetchApi();
//       setText({ id: "", name: "", price: "" });
//     } catch (error) {
//       console.error("Error saving product:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>API Products</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ID"
//           name="id"
//           value={text.id}
//           onChange={AddText}
//         />
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="name"
//           value={text.name}
//           onChange={AddText}
//         />
//         <input
//           type="text"
//           placeholder="Enter Price"
//           name="price"
//           value={text.price}
//           onChange={AddText}
//         />
//         <button type="submit">{edit ? "Update" : "Add"} Product</button>
//       </form>

//       <ul>
//         {product.map((p) => (
//           <li key={p.id}>
//             {p.name} - ₹{p.price}
//             <button onClick={() => {
//               setText(p);
//               setEditId(p.id);
//             }}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetail() {
  const [state, setState] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
           fetch('https://fakestoreapi.com/products?limit=5')

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  
  return (
    <div>
      <h1>Product Detail</h1>
      <h3>{state.title}</h3>
      <img src={state.image} alt={state.title} width={200} />
      <li>${state.price}</li>
 </div>
);
}