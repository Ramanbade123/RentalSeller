import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./wishlistContext";

const AppProvider = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
    );
};

export default AppProvider;
