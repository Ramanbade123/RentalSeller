import React from "react";
import { useCart } from "../GlobalState/CartContext";
import WishlistCard from "./WishlistCard";
import { Link } from "react-router-dom";
import { useWishlist } from "../GlobalState/wishlistContext";

const WishlistPage = () => {
    const { cartItems, setCartItems } = useCart();
    const { wishlistItems, setWishlistItems, isLoggedIn } = useWishlist()

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
    console.log("isLoggedin value", isLoggedIn);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {!isLoggedIn ? (
                <div className="mt-4 text-center text-sm text-red-600 font-medium">
                    Please{" "}
                    <Link to="/auth" className="text-blue-600 underline hover:text-blue-800">
                        log in
                    </Link>{" "}
                    to use wishlist.
                </div>
            )
                : wishlistItems.length === 0 ? (
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
                            {wishlistItems.map((item) => (
                                <WishlistCard key={item.productId} productId={item.productId} />
                            ))}
                        </div>
                    </>
                )}
        </div>
    );
};

export default WishlistPage;
