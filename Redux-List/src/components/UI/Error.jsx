import React from 'react';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>404</h1>
      <p>Page Not Found</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Home</a>
    </div>
  );
};

export default Error;
