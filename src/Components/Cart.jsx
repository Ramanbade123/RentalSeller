import React from "react";
import { LuPanelRightClose } from "react-icons/lu";
const Cart = ({ isOpen, toggleCart }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-[25%] bg-white border-l-gray-700 border-l-1 g p-4 transform transition-transform duration-500 ease-in-out 
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Close Button */}
            <LuPanelRightClose className="text-black font-bold text-lg absolute top-4 right-4" onClick={toggleCart} />

            {/* Cart Content */}
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            <p className="text-gray-600">No items in the cart.</p>
        </div>
    );
};

export default Cart;
