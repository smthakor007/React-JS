import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <div>
        <Link to='/Todo'>Todo</Link>
        <Link to='/User'>User</Link>
        <Link to='/Timer'>Timer</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Prac'>Prac</Link>






      </div>
      <div>
      </div>
    </div>
  )
}
