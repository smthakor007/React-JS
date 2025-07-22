import React, { useRef, useState } from 'react';

function Input() {
  const inputRef = useRef(); 
  const renderCountRef = useRef(0); 
  const submitCountRef = useRef(0); 
  const [color, setColor] = useState('black');

  renderCountRef.current += 1; 

  const handleSubmit = () => {
    const value = inputRef.current.value;
    submitCountRef.current += 1; 
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleChangeColor = () => {
    setColor(prev => (prev === 'black' ? 'blue' : 'black'));
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleChangeColor}>Change Color</button>

      <p style={{ color: color }}>
        Lorem ipsum dolor sit amet.
      </p>

      <p><strong>Render Count:</strong> {renderCountRef.current}</p>
      <p><strong>Submit Clicks:</strong> {submitCountRef.current}</p>
    </div>
  );
}

export default InputFocusExample;