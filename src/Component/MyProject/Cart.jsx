// Cart.jsx
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const data = useSelector((store) => store || [])

  return (
    <div style={{ padding: "20px" }}>
      {data && data.length > 0 ? (
        data.map((el, i) => (
          <div 
            key={i} 
            style={{ 
              border: "1px solid #ccc", 
              borderRadius: "8px", 
              padding: "15px", 
              margin: "10px 0", 
              display: "flex", 
              alignItems: "center", 
              gap: "20px" 
            }}
          >
            <img 
              src={el.img} 
              alt={el.name || `item-${i}`} 
              width={100} 
              style={{ borderRadius: "6px" }}
            />
            <div>
              <h3>{el.name}</h3>
              <p>Price: {el.price}</p>
              <p>Quantity: {el.quantity || 1}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>🛒 Cart is empty</p>
      )}
    </div>
  )
}
