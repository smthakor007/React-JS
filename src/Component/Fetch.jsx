import React, { useEffect, useState } from 'react';

export default function Fetch() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    image: ""
  });

  function fetchData() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setState({
          name: data.results[0].name.first,
          gender: data.results[0].gender,
          image: data.results[0].picture.medium
        });
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.gender}</p>
      <img src={state.image} alt="user" />
      <br />
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}
