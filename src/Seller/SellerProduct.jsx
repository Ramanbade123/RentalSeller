import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon

const SellerProduct = ({ product }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleDelete = async (productId) => {
        setIsDeleting(true);
        try {
            const response = await axiosInstance.delete(`/product/${productId}`);
            if (response.status === 200) {
                toast.success("Product deleted successfully!");
                navigate(0);
            } else {
                toast.error("Failed to delete product.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error deleting product.");
        } finally {
            setIsDeleting(false);

        }
    };

    return (
        <div className="relative group w-[90%] sm:min-w-[22%] sm:w-[300px] bg-white rounded-lg h-[55dvh] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
                        src={`${baseUrl}${product.productAvatar}`}
                        alt={product.name}
                        onError={(e) => {
                            e.currentTarget.src = "/fallback.png";
                            e.currentTarget.onerror = null;
                        }}
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            {/* Edit & Delete Buttons */}
            <div className="absolute top-2 right-2 flex gap-2 items-center">
                <button
                    disabled={isDeleting}
                    className={`bg-green-500 text-white px-4 py-2 rounded ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <Link to={`edit-product/${product.id}`}>
                        <FaRegEdit />
                    </Link>
                </button>
                <button
                    onClick={() => handleDelete(product.id)}
                    disabled={isDeleting}
                    className={`bg-red-500 text-white px-4 py-2 rounded ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {isDeleting ? (
                        <ImSpinner2 className="animate-spin text-white" />
                    ) : (
                        <FaTrashAlt />
                    )}
                </button>
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

export default SellerProduct;
