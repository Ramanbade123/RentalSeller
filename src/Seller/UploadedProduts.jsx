import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SellerProduct from './SellerProduct';

const UploadProduts = () => {
    const [products, setProducts] = useState([]);
    // Fetch products when the component mounts
    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                // Use axiosInstance to get products for the logged-in seller
                const productsResponse = await axiosInstance.get("/product/my-products");
                setProducts(productsResponse.data); // Response data will contain the products array
            } catch (error) {
                console.error(error)
                toast.error("Error fetching seller data!");
            }
        };

        fetchSellerData();
    }, []);
    return (
        <div className="flex flex-wrap justify-center gap-5">
            {products.map((product) => (
                <SellerProduct key={product.id} product={product} />
            ))}
        </div>
    )
}

export default UploadProduts