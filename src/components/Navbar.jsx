import React, { useState, useContext } from 'react'; 
import { assets } from '../assets/frontend_assets/assets';
import { Links, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { setShowSearch } = useContext(ShopContext); 

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div className="flex items-center justify-between py-5 px-16 font-medium relative">
      <Link to="/" > 
      <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

     
      <ul className="flex gap-6 text-zinc-700">
        {['/', '/collection', '/about', '/contact'].map((path, index) => {
          const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'];
          return (
            <NavLink
              key={index}
              to={path}
              className="flex flex-col items-center text-sm hover:text-black"
            >
              <p>{labels[index]}</p>
              <hr className="w-2/4 border rounded-md hidden bg-zinc-700" />
            </NavLink>
          );
        })}
      </ul>

     
      <div className="flex gap-6 items-center relative">
      
        <div className="h-5 w-5">
          <img className="cursor-pointer" src={assets.search_icon} onClick={() => setShowSearch(true)} alt="Search" />
        </div>

       
        <div className="h-5 w-5 relative">
          <img
            className="cursor-pointer"
            src={assets.profile_icon}
            alt="Profile"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 top-8 w-40 bg-white shadow-md rounded-md z-50">
              <ul className="text-sm text-zinc-700">
               <Link to="/login">
                <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">Login</li>
               </Link>
                <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>

  
        <div className="h-5 w-5">
          <Link to="/cart">
          <img className="cursor-pointer" src={assets.cart_icon} alt="Cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
