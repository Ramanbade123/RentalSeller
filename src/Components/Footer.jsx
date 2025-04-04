import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 px-6 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left & Right Links */}
                <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Returns and Exchanges</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Order and Shipping</a>
                        <a href="#" className="hover:underline">FAQs</a>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block border-l border-gray-400 h-20 mx-4"></div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:underline">About Us</a>
                        <a href="#" className="hover:underline">Store Locations</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                        <a href="#" className="hover:underline">Search</a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6 md:mt-0 text-sm text-gray-600">
                    © Copyright 2025 RenTour. Kathmandu, Nepal
                </div>
            </div>
        </footer>
    );
};

export default Footer;
