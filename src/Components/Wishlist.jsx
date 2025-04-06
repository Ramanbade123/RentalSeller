import React from "react";
import { useCart } from "../GlobalState/CartContext";
import WishlistCard from "./WishlistCard";


const WishlistPage = () => {
    const { wishlistItems, setWishlistItems, cartItems, setCartItems } = useCart();

    const addAllToCart = () => {
        const newItems = wishlistItems.filter(
            (wishItem) => !cartItems.some((cartItem) => cartItem.id === wishItem.id)
        );
        const withQuantities = newItems.map((item) => ({ ...item, quantity: 1 }));
        setCartItems([...cartItems, ...withQuantities]);
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <>
                    <div className="flex gap-4 mb-6">
                        <button
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                            onClick={addAllToCart}
                        >
                            Add All to Cart
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={clearWishlist}
                        >
                            Remove All
                        </button>
                    </div>
                    <div className="grid gap-4">
                        {wishlistItems.map((product) => (
                            <WishlistCard key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default WishlistPage;
