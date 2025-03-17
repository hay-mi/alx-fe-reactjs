import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4">
            <h1 className="text-white text-2xl">Recipe Finder</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:underline">Home</a></li>
                    <li><a href="/recipes" className="text-white hover:underline">Recipes</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;