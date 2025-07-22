import React, { useRef } from 'react';

export default function Todo2  ()  {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const errorRef = useRef();
  const successRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    errorRef.current.innerText = '';
    successRef.current.innerText = '';

    if (!name || !email || !pass) {
      errorRef.current.innerText = 'All fields are required.';
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      errorRef.current.innerText = 'Invalid email format.';
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(pass)) {
      errorRef.current.innerText =
        'Password must have 8 chars, 1 uppercase, 1 lowercase & 1 digit.';
      return;
    }

    successRef.current.innerText = 'Form submitted successfully.';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} /><br />
        <input type="text" placeholder="Email" ref={emailRef} /><br />
        <input type="password" placeholder="Password" ref={passRef} /><br />
          <button type="submit">Submit</button>
      </form>
      <p ref={errorRef}></p>        
      <p ref={successRef}></p>
    </div>
  );
};
