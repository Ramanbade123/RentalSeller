// src/Pages/Product/ProductDetail.jsx
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Product Detail</h1>
            <p>Product ID: {productId}</p>
            {/* Fetch product using productId */}
        </div>
    );
};

export default ProductDetail;
