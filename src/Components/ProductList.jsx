import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // UI component for each product
import allProducts from "/src/Data/products.json";
const ProductList = ({ category }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const filtered = allProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredProducts(filtered);
    }, [category]);

    return (
        <div className="flex shrink-0 flex-wrap justify-center gap-3 sm:gap-7 px-[2%] py-[1%]">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};

export default ProductList;
