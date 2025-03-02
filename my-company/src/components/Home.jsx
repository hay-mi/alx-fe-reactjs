import React from 'react';

function Home() {
  return (
    <div style={{
      padding: '20px', textAlign: 'center',
      textAlign: 'center',
      backgroundImage: 'url("https://images.unsplash.com/photo-1542281286-9e0a16bb134f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', // Example background image
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
