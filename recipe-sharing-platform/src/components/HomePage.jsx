import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetch data from the local file
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing Platform
        <AddRecipeForm onAddRecipe={addRecipe} />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
