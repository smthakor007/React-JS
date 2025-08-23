import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




export default function HomeDetail() {
    const [products, setProducts] = useState(null)
    const { Category,id } = useParams();
    console.log(Category);

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        try {
            const info = await axios.get(`http://localhost:5000/${Category}/${id}`)
            setProducts(info.data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    return (
        <div>
            <h1>category</h1>
            <ul>

                
                    <li key={products.id}>
                        <h2>{products.name}</h2>
                        <p>{products.price}</p>
                        <img src={products.img} alt={products.title} style={{ width: 200 }} />   <br />
                       

                    </li>

            
            </ul>
        </div>
    )
}
