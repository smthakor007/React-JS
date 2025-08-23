import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function ele() {
    const [state,setstate]=useState([]);
    useEffect(()=>{
       fetch("https://fakestoreapi.com/products/category/electronics")
       .then((res)=>res.json())
       .then((data)=>{
        setstate(data)
       })
    },[])
  return (
    <div>
        <h1>electronics Products</h1>
        {
            state.map((el)=>(
                <div key={el.id}>
                <Link to={`/Productdetail/${el.id}`}>{el.title}</Link>
                <br/>
                <img src={el.image} alt={el.title} width={100} /> 
                <li>${el.price}</li>
                </div>
            ))
        }
    </div>
  );
}
