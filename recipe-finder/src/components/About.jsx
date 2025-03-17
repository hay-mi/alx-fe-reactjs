// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Recipe Finder</h1>
      <p className="mb-4">
        Recipe Finder was created to simplify the process of finding recipes.
        Whether you're looking for inspiration or trying to use up ingredients,
        we've got you covered.
      </p>
      <p>
        We use the Edamam Recipe Search API to provide a wide variety of
        recipes.
      </p>
    </div>
  );
};

export default About;
