import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-4xl font-bold mt-8">Welcome to the Recipe Finder App</h1>
            <p className="mt-4 text-lg text-center">
                Discover delicious recipes by searching for ingredients or dish names. 
                Use the search bar below to get started!
            </p>
            <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {/* RecipeCard components will be rendered here */}
                {/* Example: <RecipeCard /> */}
            </div>
        </div>
    );
};

export default Home;