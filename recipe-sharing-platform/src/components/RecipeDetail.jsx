import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-6 text-xl">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{recipe.title}</h1>
        <p className="text-gray-600 my-4">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal ml-6 mt-2 text-gray-700">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
