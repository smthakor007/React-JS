import React, { useState, useRef } from 'react';

export default function Timer() {
  const [state, setState] = useState(0);
  const id = useRef(0);

  function Start() {
    id.current = setInterval(() => {
      setState((prevState) => prevState + 1);
      console.log(id.current);
    }, 1000);
  }

  function stop() {
    clearInterval(id.current);
  }

  return (
    <div>
      <h1>Timer is {state}</h1>
      <button onClick={Start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
