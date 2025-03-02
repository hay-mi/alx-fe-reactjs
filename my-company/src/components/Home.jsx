import React from 'react';

function Home() {
  return (
    <div style={{
      padding: '20px', textAlign: 'center',
      textAlign: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white', 
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '1em' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.2em' }}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
