import React from 'react';

function About() {
  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: 'white',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '50px',
    marginBottom: '30px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#555',
    lineHeight: '1.9',
  };

  const highlightStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={textStyle}>
        Welcome to <span style={highlightStyle}>My Page</span> – where style meets quality.
        We are passionate about delivering trendy and affordable fashion that suits your lifestyle.
        Whether you're looking for everyday wear or something for a special occasion,
        <span style={highlightStyle}> Style </span> is your go-to destination.
      </p>
    </section>
  );
}

export default About;
