import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  };

  const linkStyle = {
    color: '#ccc',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '20px',
  };

  const linkHover = {
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>Slider</a>
        <a href="#" style={linkStyle}>Link</a>
        <a href="#" style={linkStyle}>About</a>
      </div>
      <p style={{ marginTop: '20px', fontSize: '20px', color: '#black' }}>
        © 2025 Bootstrap Page. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
