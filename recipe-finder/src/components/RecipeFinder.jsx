// src/components/RecipeFinder.jsx

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

const RecipeFinder = () => {
  const [recipes, setRecipes] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const edamamApiUrl = "https://api.edamam.com/api/recipes/v2";
  const edamamAppId = import.meta.env.VITE_EDAMAM_APP_ID;
  const edamamAppKey = import.meta.env.VITE_EDAMAM_APP_KEY;

  useEffect(() => {
    if (searchQuery) {
      const fetchRecipes = async () => {
        try {
          const response = await fetch(
            `${edamamApiUrl}?q=${searchQuery}&app_id=${edamamAppId}&app_key=${edamamAppKey}&type=public`
          );
          const data = await response.json();
          setRecipes(data.hits.map((hit) => hit.recipe));
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      };

      fetchRecipes();
    } else {
      setRecipes();
    }
  }, [searchQuery, edamamAppId, edamamAppKey]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Recipes</h1>
      <SearchBar onSearch={handleSearch} />
      {recipes.length > 0 ? (
        <div className="recipe-finder-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="mt-4">
          {searchQuery
            ? "No recipes found."
            : "Search for recipes using ingredients or dish names."}
        </p>
      )}
    </div>
  );
};

export default RecipeFinder;
