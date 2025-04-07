import fs from "fs";
import path from "path";
import process from "process";

const usersFile = path.join(process.cwd(), "src", "Data", "users.json");

const readUsers = () => {
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

export const updateCart = (req, res) => {
  const userId = req.user.id;
  const { cart } = req.body;

  if (!Array.isArray(cart)) {
    return res.status(400).json({ message: "Invalid cart data" });
  }

  try {
    const users = readUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    // Merge cart items: avoid duplicates, update quantity if needed
    const existingCart = users[userIndex].cart || [];
    const updatedCart = [...existingCart];

    cart.forEach((newItem) => {
      const index = updatedCart.findIndex((item) => item.id === newItem.id);
      if (index !== -1) {
        updatedCart[index] = { ...updatedCart[index], ...newItem };
      } else {
        updatedCart.push(newItem);
      }
    });

    users[userIndex].cart = updatedCart;
    writeUsers(users);

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateWishlist = (req, res) => {
  const userId = req.user.id;
  const { wishlist } = req.body;

  if (!Array.isArray(wishlist)) {
    return res.status(400).json({ message: "Invalid wishlist data" });
  }

  try {
    const users = readUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    // Merge wishlist items without duplicates
    const existingWishlist = users[userIndex].wishlist || [];
    const updatedWishlist = [...existingWishlist];

    wishlist.forEach((newItem) => {
      const exists = updatedWishlist.find((item) => item.id === newItem.id);
      if (!exists) {
        updatedWishlist.push(newItem);
      }
    });

    users[userIndex].wishlist = updatedWishlist;
    writeUsers(users);

    res.status(200).json({ message: "Wishlist updated successfully" });
  } catch (error) {
    console.error("Error updating wishlist:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
