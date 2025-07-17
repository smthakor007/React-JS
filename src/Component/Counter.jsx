import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const Increment = () => setCount(count + 1)

    const Decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const Resert = () => setCount(0)


    return (

        <div style={{
            textAlign:'center',
            marginTop:'50px',
            
        }}>
            <h1>Counter<br></br>{ count}</h1>
            <button onClick={Increment}>Increment</button>{" "}
            <button onClick={Decrement}>Decrement</button>{" "}
            <button onClick={Resert}>Resert</button>
        </div>
    )
}
