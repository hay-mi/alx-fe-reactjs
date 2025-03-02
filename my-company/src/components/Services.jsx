import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Our Services</h1>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive columns
        gap: '20px',
      }}>
        <li style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center',
       }}>
        <h3>Technology Consulting</h3>
        <p>We provide expert guidance on technology strategy and implementation.</p>
        </li>
        <li style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}>
          <h3>Market Analysis</h3>
          <p>We help you understand your target market and identify growth opportunities.</p>
        </li>
        <li style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}>
          <h3>Product Development</h3>
          <p>We bring your product ideas to life with our end-to-end development services.</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
