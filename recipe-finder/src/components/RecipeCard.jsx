// src/components/RecipeCard.jsx

import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="recipe-card-image"
      />
      <div className="recipe-card-content">
        <h2 className="recipe-card-title">{recipe.label}</h2>
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="recipe-card-button"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
