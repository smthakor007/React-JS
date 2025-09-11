import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction, resetAction } from './Action'

export default function Counter() {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter<br />{count}</h1>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>{" "}
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>{" "}
            <button onClick={() => dispatch(resetAction())}>Reset</button>
        </div>
    )
}
