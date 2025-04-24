import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FiUser, FiHeart, FiShoppingCart, FiSearch, FiHome } from "react-icons/fi";

const LoginNav = ({
    logo = "/logo.svg",
    links = [],
    classes = "",
    scrollToSection,
    auths = []
}) => {
    const navigate = useNavigate();

    return (
        <nav className={clsx(
            "font-sans fixed top-0 left-0 z-50 flex items-center justify-between gap-4 h-[67px] sm:h-[80px] w-full px-4 sm:px-8 shadow-sm bg-white border-b border-gray-100",
            classes
        )}>
            {/* Logo */}
            {logo && <Link to="/" className="flex items-center text-gray-800 text-lg sm:text-xl font-medium gap-2 sm:gap-3 sm:w-[20%]">
                <span className="hidden sm:flex">RenTour</span>
            </Link>}
            
            {/* Search Bar */}
            <div className="w-[60%] sm:w-[40%] relative">
                <div className="absolute flex items-center justify-center w-[12%] h-full">
                    <FiSearch className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input 
                    type="text"
                    placeholder="Search for products..."
                    className="bg-gray-50 w-full h-full font-light text-gray-700 rounded-lg px-[12%] py-2 sm:py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                />
            </div>
            
            {/* Navigation Icons */}
            <div className="flex items-center justify-end gap-4 sm:gap-6">
                <Link 
                    to="/landingpage" 
                    className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Home"
                >
                    <FiHome className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                
                <Link 
                    to="/profile" 
                    className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Profile"
                >
                    <FiUser className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                
                <Link 
                    to="/wishlist" 
                    className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Wishlist"
                >
                    <FiHeart className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                
                <Link 
                    to="/cart" 
                    className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors relative"
                    aria-label="Cart"
                >
                    <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                    {/* Cart item count badge */}
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        3
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default LoginNav;