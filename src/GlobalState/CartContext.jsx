import { createContext, useContext, useState, useEffect, useRef } from "react";
import axiosInstance, { setAuthToken } from "../utils/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (err) {
      console.error("Failed to parse cart from localStorage:", err);
      return [];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch (err) {
      console.error("Failed to parse wishlist from localStorage:", err);
      return [];
    }
  });

  const prevCartRef = useRef(cartItems);
  const prevWishlistRef = useRef(wishlistItems);

  // Set auth token on first render
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Sync updated cart only if it changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));

    const prevCart = prevCartRef.current;
    if (JSON.stringify(cartItems) !== JSON.stringify(prevCart)) {
      syncCart(cartItems);
      prevCartRef.current = cartItems;
    }
  }, [cartItems]);

  // Sync updated wishlist only if it changed
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

    const prevWishlist = prevWishlistRef.current;
    if (JSON.stringify(wishlistItems) !== JSON.stringify(prevWishlist)) {
      syncWishlist(wishlistItems);
      prevWishlistRef.current = wishlistItems;
    }
  }, [wishlistItems]);

  const syncCart = async (updatedCart) => {
    try {
      await axiosInstance.post("/user/update-cart", { cart: updatedCart });
    } catch (error) {
      console.error("Failed syncing cart to backend:", error);
    }
  };

  const syncWishlist = async (updatedWishlist) => {
    try {
      await axiosInstance.post("/user/update-wishlist", { wishlist: updatedWishlist });
    } catch (error) {
      console.error("Failed syncing wishlist to backend:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
