import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Category() {
  const [product, setProduct] = useState([])
  const { category } = useParams()

  useEffect(() => {
    fetchApi()
  }, [category])

  const fetchApi = async () => {
    try {
      const info = await axios.get(`http://localhost:3000/${category}`)
      setProduct(info.data)
    } catch (err) {
      console.error("Error fetching category data:", err)
    }
  }

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: "20px" }}>
      {product.length > 0 ? (
        product.map((el) => (
          <div
            key={el.id}
            style={{
              textAlign: 'center',
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px"
            }}
          >
           
            <Link to={`/${category}/${el.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={el.img}
                width={150}
                alt={el.name || `prod-${el.id}`}
                style={{ borderRadius: "6px" }}
              />
              <h3 style={{ margin: "10px 0" }}>{el.name}</h3>
              <p>Price: {el.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  )
}
