import React from 'react'

function Array() {
    const [arr, setarr] = (["urvish", "sachin", "priyanshu", "sahil", "sagar"]);
    return (
        <div>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default Array;
