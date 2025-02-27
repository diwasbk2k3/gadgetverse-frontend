import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu after a click
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full h-20 text-white bg-[#142441] flex items-center justify-between px-4 md:px-8">
        <div className="text-2xl sm:text-4xl font-bold">
          <Link to="/" className="hover:text-red-400">Gadgetverse</Link>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </div>

        {/* Mobile & Desktop Menu with smooth transition */}
        <ul 
          className={`absolute md:static top-20 left-0 w-full bg-[#142441] md:flex justify-center text-[16px] transition-all duration-500 ease-in-out transform ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} md:max-h-none md:opacity-100`}>
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/home" className="hover:text-red-400">HOME</Link>
          </li>
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/shop" className="hover:text-red-400">SHOP</Link>
          </li>
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/about" className="hover:text-red-400">ABOUT US</Link>
          </li>
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/contact" className="hover:text-red-400">CONTACT US</Link>
          </li>

          {/* Mobile-only Login and Signup */}
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:hidden flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/login" className="hover:text-pink-500">Login</Link>
          </li>
          <li 
            className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:hidden flex items-center justify-center"
            onClick={handleMenuItemClick}>
            <Link to="/signup" className="hover:text-pink-500">Signup</Link>
          </li>
        </ul>

        {/* Desktop Menu (unchanged) */}
        <div className="hidden md:flex items-center space-x-5 text-[16px]">
          <div className="flex items-center">
            <Link to="/login" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer flex items-center">
              <i className="fa-solid fa-user pr-2"></i>
              <span>Login</span>
            </Link>
          </div>
          <div className="flex items-center px-4 text-[16px]">
            <Link to="/signup" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer flex items-center">
              <i className="fa-solid fa-user-plus pr-2"></i>
              <span>Signup</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
