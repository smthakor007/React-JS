import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Product() {
  return (
    <div>
      <div>
        <Link to='Table'>Table</Link>
        <Link to='Toddo'>Toddo</Link>
      </div>
        <div>
          <Outlet/>
        </div>
      </div>
  )
}
