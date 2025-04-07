import express from "express";
import { updateCart, updateWishlist } from "../controllers/cartController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// In authRoutes.js or new cartRoutes.js
router.post("/update-cart", authMiddleware, updateCart);

router.post("/update-wishlist", authMiddleware, updateWishlist);

export default router;
