import { Link } from "react-router-dom";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [wishlisted, setWishlisted] = useState(false);

    const toggleWishlist = () => {
        setWishlisted(!wishlisted);
    };

    return (
        <Link
            to={`/${product.category}/${product.id}`}
            className="group w-[90%] sm:min-w-[22%] sm:w-[22%] bg-white rounded-lg h-[55dvh] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
            <div className="relative h-[80%] bg-gray-100 w-full p-[2px]">
                <img
                    src={product.productAvatar}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />

                <div
                    onClick={toggleWishlist}
                    className="absolute top-2 right-2 hover:bg-white rounded-full p-2 shadow-md cursor-pointer z-10"
                >
                    {wishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-black" />}
                </div>
                {product.badge && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                        {product.badge}
                    </div>
                )}
            </div>


            <div className="p-2 text-center">
                <h2 className="font-semibold text-black text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {product.name}
                </h2>
                <div className="flex items-center justify-center gap-x-4">
                    <span className="text-primary line-through text-red-500 ">
                        ₹{product.originalPrice}
                    </span>

                    {product.originalPrice > product.offeredPrice && (
                        <span className="animate-pulse font-semibold">
                            ₹{product.offeredPrice}
                        </span>
                    )}

                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
