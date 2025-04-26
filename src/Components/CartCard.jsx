import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../GlobalState/CartContext";

const CartCard = ({ productid, quantity, }) => {
    const { isCartOpen, updateQuantity, removeFromCart } = useCart();
    const [product, setProduct] = useState(null);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${baseUrl}/products/${productid}`);
                setProduct(res.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            }
        };

        if (productid) {
            fetchProduct();
        }
    }, [productid, isCartOpen, baseUrl]);

    const isLoggedIn = !!localStorage.getItem("authToken");

    const handleSubtract = () => {
        if (quantity > 1) {
            updateQuantity(productid, quantity - 1);
        }
    };

    if (!product) return null;

    return (
        <div className="flex items-center justify-between p-2 border-b">
            <img
                src={`${baseUrl}${product.productAvatar}`}
                alt={product.name}
                className="w-16 h-16 object-contain"
            />
            <div className="flex-1 px-3">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-gray-500">
                    ₹{product.offeredPrice} x {quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-1">
                    <button
                        onClick={handleSubtract}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        disabled={quantity <= 1 || !isLoggedIn}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => updateQuantity(productid, quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        disabled={!isLoggedIn}
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                className="text-red-500 text-sm font-semibold hover:underline disabled:opacity-50"
                onClick={() => removeFromCart(productid)}
                disabled={!isLoggedIn}
            >
                Remove
            </button>
        </div>
    );
};

export default CartCard;
