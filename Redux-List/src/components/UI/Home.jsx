import React from 'react';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '100px 20px',
    // backgroundColor: '#f0f0f0',
    height: '100vh',
    width:'100%',
  };

  const headingStyle = {
    fontSize: '48px',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#666',
  };

  const buttonStyle = {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Home Page</h1>
      <p style={paragraphStyle}>This is your landing area. Explore the content here.</p>
      <button >Get Started</button>
    </div>
  );
};

export default Home;
