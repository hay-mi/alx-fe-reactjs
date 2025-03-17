// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipeFinder from "./components/RecipeFinder";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop */}
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipeFinder />} />
      </Routes>
    </div>
  );
}

export default App;
