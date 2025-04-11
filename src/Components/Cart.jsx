import React from "react";
import { LuPanelRightClose } from "react-icons/lu";
import { useCart } from "../GlobalState/CartContext";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const Cart = ({ isOpen, toggleCart }) => {
  const { cartItems } = useCart();
  const isLoggedIn = !!localStorage.getItem("authToken");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.offeredPrice * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full 
        w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%]
        bg-white border-l border-gray-300 p-4 shadow-lg z-50
        transform transition-transform duration-500 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <LuPanelRightClose
        className="text-black font-bold text-xl absolute top-4 right-4 cursor-pointer"
        onClick={toggleCart}
      />

      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {!isLoggedIn ? (
        <div className="mt-4 text-center text-sm text-red-600 font-medium">
          Please{" "}
          <Link onClick={toggleCart} to="/auth" className="text-blue-600 underline hover:text-blue-800">
            log in
          </Link>{" "}
          to use your cart.
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartCard
              key={item.productid}
              productid={item.productid}
              quantity={item.quantity}
            />
          ))}

          {/* Total & Checkout */}
          <div className="mt-4">
            <p className="text-lg font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
            <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
