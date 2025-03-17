import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      setError("All fields are required!");
      return;
    }

    // Ensure at least two ingredients
    const ingredientList = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item);
    if (ingredientList.length < 2) {
      setError("Please add at least two ingredients.");
      return;
    }

    // Ensure at least one instruction step
    const instructionSteps = instructions
      .split("\n")
      .map((step) => step.trim())
      .filter((step) => step);
    if (instructionSteps.length < 1) {
      setError("Please provide at least one step for preparation.");
      return;
    }

    // New recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: instructionSteps,
      image: "https://via.placeholder.com/150", // Placeholder image
      summary: instructions.split(".")[0] + ".", // First sentence as summary
    };

    // Pass new recipe to parent component
    onAddRecipe(newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter ingredients, one per line"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Instructions Input */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Instructions (one step per line)
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter preparation steps, one per line"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
