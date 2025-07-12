import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className="border-y bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 w-full max-w-3xl mx-auto border border-gray-300 rounded-full px-4 py-2 bg-gray-100">
        <img src={assets.search_icon} alt="search" className="w-5 h-5 opacity-60" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-800"
        />
      </div>
      <img
        src={assets.cross_icon}
        alt="close"
        onClick={() => setShowSearch(false)}
        className="w-5 h-5 ml-4 cursor-pointer opacity-70 hover:opacity-100 transition duration-150"
      />
    </div>
  ) : null;
};

export default SearchBar;
