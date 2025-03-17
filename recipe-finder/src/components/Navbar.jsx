// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div>
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="ml-4 text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link to="/recipes" className="ml-4 text-gray-700 hover:text-gray-900">
          Recipe Finder
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
