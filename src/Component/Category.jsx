import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




export default function Category() {
    const [products, setProducts] = useState([])
    const { Category } = useParams();
    console.log(Category);

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        try {
            const info = await axios.get(`http://localhost:5000/${Category}`)
            setProducts(info.data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    return (
        <div>
            <h1>category</h1>
            <ul>

                {products.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <img src={item.img} alt={item.title} style={{ width: 200 }} />   <br />
                        <Link to={`${item.Category}/${item.id}`}>Detail</Link>

                    </li>

                ))}
            </ul>
        </div>
    )
}
