import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function HomeP() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data")
      setProducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
      {products.map((el) => (
        <div key={el.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
          <Link to={`/category/${encodeURIComponent(el.category)}`}>
            <img src={el.img} alt={el.title} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
          </Link>
          <h3>{el.title}</h3>
          <p>₹{el.price}</p>
        </div>
      ))}
    </div>
  )
}
