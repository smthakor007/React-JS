import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, editAction } from './Action'

export default function Display() {
  const data = useSelector((store) => store)
  const dispatch = useDispatch()

  function DeleteData(i) {
    dispatch(deleteAction(i))
  }

  function updateData(i) {
    const update = prompt("Enter a New Value")
    if (update) {
      dispatch(editAction(i, update))
    }
  }

  return (
    <div>
      <h1>Display</h1>
      <ul>
        {data.length > 0 ? (
          data.map((el, i) => (
            <li key={i}>
              {el}
              <button onClick={() => DeleteData(i)}>Delete</button>
              <button onClick={() => updateData(i)}>Update</button>
            </li>
          ))
        ) : (
          <p>No todos found</p>
        )}
      </ul>
    </div>
  )
}
 