import { createContext, useContext, useEffect, useState, useRef } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [cartItems, setCartItems] = useState(() => {
    const local = localStorage.getItem("cart");
    return local ? JSON.parse(local) : [];
  });


  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };


  // Save cart to localStorage when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const hasSynced = useRef(false);

  const mergeCarts = (localCart, backendCart) => {
    const merged = [...localCart];

    backendCart.forEach((backendItem) => {
      const existing = merged.find(item => item.productid === backendItem.productid);
      if (existing) {
        existing.quantity = Math.max(existing.quantity, backendItem.quantity);
      } else {
        merged.push(backendItem);
      }
    });

    return merged;
  };

  // Sync logic on login or first load
  useEffect(() => {
    const syncCartWithBackend = async () => {
      if (isLoggedIn && !hasSynced.current) {
        try {
          const res = await axiosInstance.get(`/user/get-cart`);
          const backendCart = res.data.cart || [];

          const mergedCart = mergeCarts(cartItems, backendCart);
          setCartItems(mergedCart); // triggers localStorage sync

          // Remove only the items that already exist in backend from localStorage
          const syncedIds = backendCart.map(item => item.productid);
          const unsyncedLocalItems = cartItems.filter(
            item => !syncedIds.includes(item.productid)
          );
          localStorage.setItem("cart", JSON.stringify(unsyncedLocalItems));

          // Sync merged cart to backend
          await axiosInstance.post("/user/update-cart", {
            cart: mergedCart,
          });

          hasSynced.current = true;
        } catch (error) {
          console.error("Cart sync failed:", error);
        }
      }
    };

    syncCartWithBackend();
  }, [isLoggedIn]);

  const addToCart = async (productid, offeredPrice) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productid === productid);
      const updatedCart = existing
        ? prev.map((item) =>
          item.productid === productid
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        : [...prev, { productid, quantity: 1, offeredPrice }];

      // The updated item to sync to backend
      const updatedItem = existing
        ? {
          productid,
          quantity: existing.quantity + 1,
          offeredPrice: existing.offeredPrice || offeredPrice,
        }
        : { productid, quantity: 1, offeredPrice };

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // If logged in, sync only the updated item to backend
      if (isLoggedIn) {
        axiosInstance
          .post("/user/update-cart", { cart: [updatedItem] })
          .catch((err) => {
            console.error("Failed to update single cart item:", err);
          });
      }

      return updatedCart;
    });
  };


  const removeFromCart = async (productid) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.productid !== productid);

      // Update localStorage with filtered cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // If logged in, notify backend only about the removed item
      if (isLoggedIn) {
        axiosInstance
          .post("/user/update-cart", {
            cart: [{ productid, quantity: 0 }],
          })
          .catch((err) => {
            console.error("Failed to sync cart after removal:", err);
          });
      }

      return updatedCart;
    });
  };


  const updateQuantity = async (productid, quantity) => {
    if (quantity <= 0) return removeFromCart(productid);

    setCartItems((prev) =>
      prev.map((item) =>
        item.productid === productid ? { ...item, quantity } : item
      )
    );

    if (isLoggedIn) {
      axiosInstance
        .post("/user/update-cart", { cart: [{ productid, quantity }] })
        .catch((err) => {
          console.error("Failed to update quantity:", err);
        });
    }
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
