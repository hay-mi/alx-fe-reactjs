import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="border border-gray-300 rounded-l-md p-2 w-1/2"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r-md p-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;