import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

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
                <img src={logo} alt={"RenTour"} className="w-[25px] sm:w-[30px]" /> 
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
            
            {/* Navigation Links */}
            <div className="flex items-center justify-end gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="hidden sm:flex items-center gap-6">
                    {/* Navigation links removed */}
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <Link
                        to="/login"
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                    >
                        Login
                    </Link>
                    <button
                        onClick={() => navigate("/register")}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
                    >
                        Register for free
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default LoginNav;