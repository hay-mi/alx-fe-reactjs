import React from 'react';

interface RecipeCardProps {
  title: string;
  image: string;
  ingredients: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image, ingredients }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ul className="list-disc pl-5">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;