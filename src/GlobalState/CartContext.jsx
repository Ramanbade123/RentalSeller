import { createContext, useContext, useState, useEffect, useRef } from "react";
import axiosInstance, { setAuthToken } from "../utils/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("authToken"));

  const prevCartRef = useRef([]);
  const prevWishlistRef = useRef([]);

  // Set token on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
    if (token) setAuthToken(token);
  }, []);

  // ✅ Fetch initial cart and wishlist from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          axiosInstance.get("/user/get-cart"),
          axiosInstance.get("/user/get-wishlist"),
        ]);
        setCartItems(cartRes.data.cart || []);
        setWishlistItems(wishlistRes.data.wishlist || []);

        prevCartRef.current = cartRes.data.cart || [];
        prevWishlistRef.current = wishlistRes.data.wishlist || [];

        localStorage.setItem("cart", JSON.stringify(cartRes.data.cart || []));
        localStorage.setItem("wishlist", JSON.stringify(wishlistRes.data.wishlist || []));
      } catch (err) {
        console.error("Error fetching cart/wishlist from backend:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto sync cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    if (JSON.stringify(cartItems) !== JSON.stringify(prevCartRef.current)) {
      syncCart(cartItems);
      prevCartRef.current = cartItems;
    }
  }, [cartItems]);

  // Auto sync wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    if (JSON.stringify(wishlistItems) !== JSON.stringify(prevWishlistRef.current)) {
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

  // ========== CART FUNCTIONS ==========
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const subtractFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // ========== WISHLIST FUNCTIONS ==========
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists ? prev : [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };
  if (loading) return <div className="p-6">Loading your data...</div>;
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
        addToCart,
        subtractFromCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isLoggedIn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
