import React from 'react'

export default function Todol() {
  let sorted = JSON.parse(localStorage.getItem("user")) || []

  return (
    <div>Todol</div>
  )
}
