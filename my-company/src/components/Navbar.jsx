import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: 'darkgreen', padding: '10px', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
