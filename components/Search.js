import { useState } from 'react';

/**
 * Поиск с управляемым инпутом
 */
const Search = ({ searchPhotos }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) searchPhotos(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search high-resolution photos..."
        className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-black outline-none transition-all shadow-sm"
      />
      <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
        <img src="https://img.icons8.com/ios/50/000000/search--v1.png" className="w-5 h-5" alt="search" />
      </button>
    </form>
  );
};

export default Search;
