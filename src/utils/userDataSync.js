import axiosInstance from "./axiosInstance";

// Save cart to backend
export const saveUserCart = async (cart) => {
  try {
    const response = await axiosInstance.post("/user/update-cart", { cart });
    return response.data;
  } catch (error) {
    console.error("Failed to save cart:", error);
    throw error;
  }
};

// Save wishlist to backend
export const saveUserWishlist = async (wishlist) => {
  try {
    const response = await axiosInstance.post("/user/update-wishlist", {
      wishlist,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to save wishlist:", error);
    throw error;
  }
};
