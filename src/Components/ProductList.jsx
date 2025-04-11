import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // UI component for each product
import axios from "axios";
const ProductList = ({ category }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${category}`)
            .then((res) => setFilteredProducts(res.data))
            .catch((err) => {
                console.error("Error fetching category products:", err);
                setFilteredProducts([]);
            });
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
