import React, { useEffect } from "react";
import { LuPanelRightClose } from "react-icons/lu";
import { useCart } from "../GlobalState/CartContext";

const Cart = ({ isOpen, toggleCart }) => {
  const { cartItems, setCartItems } = useCart();

  // Load cart only once on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return; // Prevent 0 or negative quantity
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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

      {/* Cart Content */}
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 border-b"
            >
              <img
                src={item.productAvatar}
                alt={item.name}
                className="w-16 h-16 object-contain "
              />
              <div className="flex-1 px-3">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-gray-500">
                  ₹{item.offeredPrice} x {item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="text-red-500 text-sm font-semibold hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
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
