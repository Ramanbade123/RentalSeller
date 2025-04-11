import { createContext, useContext, useEffect, useRef, useState } from "react";
import axiosInstance, { setAuthToken } from "../utils/axiosInstance";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const local = localStorage.getItem("wishlist");
        return local ? JSON.parse(local) : [];
    });
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("authToken"));
    console.log("islogged in value fro wishlist context: ", isLoggedIn)
    useEffect(() => {
        setIsLoggedIn(() => !!localStorage.getItem("authToken"));
    }, [])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
        if (token) setAuthToken(token);
    }, []);

    const hasSynced = useRef(false);

    const mergeWishlist = (localWishlist, backendWishlist) => {
        const merged = [...localWishlist];
        backendWishlist.forEach((item) => {
            if (!merged.find((i) => i.productId === item.productId)) {
                merged.push(item);
            }
        });
        return merged;
    };

    useEffect(() => {
        const syncWishlistWithBackend = async () => {
            if (isLoggedIn && !hasSynced.current) {
                try {
                    const res = await axiosInstance.get("/user/get-wishlist");
                    const backendWishlist = res.data.wishlist || [];

                    const merged = mergeWishlist(wishlistItems, backendWishlist);
                    setWishlistItems(merged);

                    await axiosInstance.post("/user/update-wishlist", { wishlist: merged });

                    hasSynced.current = true;
                } catch (error) {
                    console.error("Wishlist sync failed:", error);
                }
            }
        };

        syncWishlistWithBackend();
    }, [isLoggedIn]);

    const addToWishlist = (productId) => {
        setWishlistItems((prev) => {
            if (prev.find((item) => item.productId === productId)) return prev;

            const updated = [...prev, { productId }];
            localStorage.setItem("wishlist", JSON.stringify(updated));

            if (isLoggedIn) {
                axiosInstance
                    .post("/user/update-wishlist", { wishlist: updated })
                    .catch((err) => console.error("Failed to sync wishlist:", err));
            }

            return updated;
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((prev) => {
            const updated = prev.filter((item) => item.productId !== productId);
            localStorage.setItem("wishlist", JSON.stringify(updated));

            if (isLoggedIn) {
                axiosInstance
                    .post("/user/update-wishlist", { wishlist: updated })
                    .catch((err) => console.error("Failed to sync wishlist:", err));
            }

            return updated;
        });
    };

    const toggleWishlist = (productId) => {
        if (wishlistItems.find((item) => item.productId === productId)) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    const clearWishlist = () => {
        setWishlistItems([]);
        localStorage.removeItem("wishlist");

        if (isLoggedIn) {
            axiosInstance
                .post("/user/update-wishlist", { wishlist: [] })
                .catch((err) => console.error("Failed to clear wishlist:", err));
        }
    };

    return (
        <WishlistContext.Provider
            value={{
                toggleWishlist,
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                clearWishlist,
                isLoggedIn,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
