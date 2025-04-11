import { CartProvider } from "./CartContext";
// import { WishlistProvider } from "./WishlistContext";

const AppProvider = ({ children }) => {
    return (
        <CartProvider>
            {/* <WishlistProvider>{children}</WishlistProvider> */}
            {children}
        </CartProvider>
    );
};

export default AppProvider;
