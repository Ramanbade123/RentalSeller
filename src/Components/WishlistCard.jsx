import React from "react";
import { FaTrashAlt, FaCartPlus } from "react-icons/fa";
import { useCart } from "../GlobalState/CartContext";


const WishlistCard = ({ product }) => {
    const { wishlistItems, setWishlistItems, cartItems, setCartItems } = useCart();

    const addToCart = () => {
        const exists = cartItems.find((item) => item.id === product.id);
        if (!exists) {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromWishlist = () => {
        const updated = wishlistItems.filter((item) => item.id !== product.id);
        setWishlistItems(updated);
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 flex gap-4 items-center justify-between">
            <img src={product.productAvatar} alt={product.name} className="w-20 h-20 object-contain" />
            <div className="flex-1">
                <h3 className="font-bold">{product.name}</h3>
                <div className="text-sm text-gray-500">
                    ₹{product.offeredPrice}{" "}
                    <span className="line-through text-red-400">₹{product.originalPrice}</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    onClick={addToCart}
                >
                    <FaCartPlus />
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    onClick={removeFromWishlist}
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default WishlistCard;
