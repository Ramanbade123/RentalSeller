import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

const Navbar = ({
    logo = "/logo.svg",
    links = [
        {
            name: "You",
            path: "/",
            icon: <FiUser className="w-5 h-5" />
        },
        {
            name: "Wishlist",
            path: "/contact",
            icon: <FiHeart className="w-5 h-5" />
        },
        {
            name: "Cart",
            path: "/",
            icon: <FiShoppingCart className="w-5 h-5" />
        }
    ],
    classes = "",
    scrollToSection,
    auths = []
}) => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    return (
        <nav className={clsx(
            "font-Poppins fixed top-0 left-0 z-50 flex items-center justify-between gap-4 h-[67px] sm:h-[97px] w-full px-2 sm:px-10 shadow-lg bg-[#FCEFDE]",
            classes
        )}>
            {logo && <Link to="/" className="flex items-center text-primary text-smalldevice sm:text-4xl font-heading gap-2 sm:gap-4 font-semibold sm:w-[20%]">
                <img src={logo} alt={"RenTour"} className="w-[25px] sm:w-[40px]" /> 
                <span className="hidden sm:flex">RenTour</span>
            </Link>}
            
            <div className="w-[70%] sm:w-[35%] relative">
                <div className="absolute flex items-center justify-center w-[10%] sm:w-[15%] h-full">
                    <FiSearch className="text-gray-500 w-5 h-5" />
                </div>
                <input 
                    type="text"
                    placeholder="Search for products"
                    className="bg-white w-full h-full font-light text-black rounded-md px-[10%] sm:px-[12%] py-[7px] sm:py-[10px] border-0 focus:outline-0"
                />
            </div>
            
            <div className="grow sm:flex sm:justify-between sm:items-center text-[13px] sm:text-[16px]">
                <div className="w-full hidden sm:flex sm:items-center justify-around">
                    {links.map((link, index) =>
                        link.ref ? (
                            <button
                                key={index}
                                onClick={() => scrollToSection(link.ref)}
                                className="flex items-center gap-1 hover:text-primary transition-colors"
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </button>
                        ) : (
                            <Link
                                key={index}
                                to={link.path}
                                className="flex items-center gap-1 hover:text-primary transition-colors"
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        )
                    )}
                    
                    <Link
                        to="/login"
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                    >
                        Login
                    </Link>
                    <button
                        onClick={() => navigate("/pages/Description")}
                        className="ml-4 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                        Start Selling
                    </button>
                </div>
                
                <div className="flex items-center justify-end gap-x-4 text-[14px]">
                    {auths.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path === "Menu" ? "/" : "/auth"}
                            className={clsx(
                                "hover:text-primary transition-colors",
                                link.path === "Menu" ? "sm:hidden" : ""
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
