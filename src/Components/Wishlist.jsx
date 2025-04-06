import { useState } from 'react';
import allProducts from '/src/Data/products.json';
import ProductCard from './ProductCard';

const WishlistPage = () => {
    const [wishlistIds, setWishlistIds] = useState([1, 2]); // Add your logic here

    const wishlistItems = allProducts.filter((item) => wishlistIds.includes(item.id));

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Your Wishlist</h2>
            <div className="flex flex-wrap gap-5 justify-center">
                {wishlistItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
