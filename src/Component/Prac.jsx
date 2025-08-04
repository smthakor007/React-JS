import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Prac() {
  return (
    <div>
        <div>
            <div>
                <Link to='Counter'>Counter</Link>
                <Link to='Fetch'>Fetch</Link>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
