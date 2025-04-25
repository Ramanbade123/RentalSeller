import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishContext";
import { SearchProvider } from "./SearchContext";

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    <SearchProvider>
                        {children}
                    </SearchProvider>
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    );
};

export default AppProvider;
