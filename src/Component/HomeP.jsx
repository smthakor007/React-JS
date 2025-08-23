import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function HomeP() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    try {
      const info = await axios.get("http://localhost:5000/data") 
      setProduct(info.data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  } 

  return (
    <div>
      {
        product.map((el, index) => (
          <div key={index}>
            <li>
            <Link to={`${el.category}`}>
            <img src={el.img} alt={el.title}  style={{width:200}}/>
            </Link>  
            </li>
            <h3>{el.price}</h3>
          </div>
        ))
      }
    </div>
  )
}
