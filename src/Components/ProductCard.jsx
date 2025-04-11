import { Link } from "react-router-dom";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../GlobalState/wishlistContext";

const ProductCard = ({ product }) => {
    const { wishlistItems, toggleWishlist, } = useWishlist();
    const isWishlisted = wishlistItems.some((item) => item.productId === product.id);

    // useEffect(() => {
    //     const isWishlisted = wishlistItems.some((item) => item.productid === product.productid);
    //     setWishlisted(isWishlisted);
    // }, [wishlistItems, product.productid]);

    // const handleToggleWishlist = () => {
    //     if (wishlisted) {
    //         removeFromWishlist(product.productid);
    //     } else {
    //         addToWishlist(product);
    //     }
    //     setWishlisted(!wishlisted);
    // };

    return (
        <div className="relative group w-[90%] sm:min-w-[22%] sm:w-[300px] bg-white rounded-lg h-[55dvh] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Wishlist Icon */}
            <div
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2 right-2 hover:bg-white rounded-full p-2 shadow-md cursor-pointer z-10"
            >
                {isWishlisted ? (
                    <FaHeart className="text-red-500" />
                ) : (
                    <FaRegHeart className="text-black" />
                )}
            </div>

            {/* Badge */}
            {product.badge && (
                <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                </div>
            )}

            {/* Image section */}
            <div className="h-[80%] aspect-auto bg-gray-100 w-full p-[2px]">
                <Link to={`/${product.category}/${product.id}`} className="w-full h-full aspect-auto">
                    <img
                        src={product.productAvatar}
                        alt={product.name}
                        onError={(e) => {
                            e.currentTarget.src = "/placeholder.png";
                            e.currentTarget.onerror = null;
                        }}
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className="p-2 h-[20%] text-center">
                <Link to={`/${product.category}/${product.id}`}>
                    <h2 className="font-semibold text-black text-lg group-hover:text-gray-800 transition-colors duration-300">
                        {product.name}
                    </h2>
                </Link>
                <div className="flex items-center justify-center gap-x-4">
                    <span className="text-red-500 line-through">₹{product.originalPrice}</span>
                    {product.originalPrice > product.offeredPrice && (
                        <span className="animate-pulse font-semibold">₹{product.offeredPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
