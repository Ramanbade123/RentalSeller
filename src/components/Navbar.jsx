import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left side */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-gray-800">
              RenTour
            </Link>
          </div>

          {/* Navigation Items - Right side */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/dashboard" 
                className="flex items-center text-gray-700 hover:text-gray-900 px-1 pt-1 text-sm font-medium"
              >
                <FiHome className="mr-2 h-5 w-5" />
                Home
              </Link>
              
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900 px-1 pt-1 text-sm font-medium"
              >
                <FiBell className="mr-2 h-5 w-5" />
                Notifications
              </button>
              
              <Link 
                to="/profile" 
                className="flex items-center text-gray-700 hover:text-gray-900 px-1 pt-1 text-sm font-medium"
              >
                <FiUser className="mr-2 h-5 w-5" />
                Profile
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden -mr-2 flex">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            <FiHome className="mr-2 h-5 w-5" />
            Home
          </Link>
          
          <button
            className="flex items-center text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full"
          >
            <FiBell className="mr-2 h-5 w-5" />
            Notifications
          </button>
          
          <Link
            to="/profile"
            className="flex items-center text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            <FiUser className="mr-2 h-5 w-5" />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;