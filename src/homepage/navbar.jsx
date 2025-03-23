import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 shadow-md px-10 py-3">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-xl font-bold text-black">RENTOUR</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-x-8 text-lg text-gray-700">
        <a href="#" className="hover:text-blue-500 transition">Home</a>
        <a href="#" className="hover:text-blue-500 transition">Categories</a>
        <a href="#" className="hover:text-blue-500 transition">How It Works</a>
        <a href="#" className="hover:text-blue-500 transition">Contact Us</a>
        <a href="#" className="hover:text-blue-500 transition">About Us</a>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 bg-white rounded-full pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
