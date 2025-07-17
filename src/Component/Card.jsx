import React, { useEffect, useState } from 'react';

export default function Card() {
  const [state, setState] = useState(
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWt1fGVufDB8fDB8fHww"
  );

  useEffect(() => {
    console.log("mount phase");

    return () => {
      alert("unmount");
    };
  }, []);

  return (
    <div>
      <img src={state} alt="bike" />
      <br />
      <button
        onClick={() => {
          setState(
            "https://imgd.aeplcdn.com/370x208/n/cw/ec/181601/bajaj-cng-freedom-125-left-front-three-quarter2.jpeg?isig=0&q=80"
          );
        }}
      >
        Update
      </button>
    </div>
  );
}
