import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CollectionCard = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchTopSold = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                const res = await axios.get(`${baseUrl}/products/top-sold`);
                setFilteredProducts(res.data);
            } catch (error) {
                console.error("Error fetching top sold products:", error);
            }
        };

        fetchTopSold();
    }, []);

    return (
        <div className="w-full flex flex-col gap-8 py-10">
            {filteredProducts.map((product, index) => {
                const isEven = index % 2 === 1;
                const layoutClass = isEven ? "lg:flex-row-reverse" : "lg:flex-row";
                const textAlign = isEven ? "items-end text-right" : "items-start text-left";

                return (
                    <div
                        key={index}
                        className={`flex flex-col ${layoutClass} items-center bg-white shadow-xl rounded-2xl w-[95%] mx-auto lg:h-[70dvh] overflow-hidden transition-all`}
                    >
                        <div className="w-full h-full lg:w-1/2 flex justify-center items-center !p-6">
                            <img
                                src={product.productAvatar}
                                alt={product.name}
                                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
                            />
                        </div>

                        <div className={`w-full lg:w-1/2 flex flex-col p-4 ${textAlign} `}>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 uppercase">{product.name}</h2>
                            <p className="text-[12px] sm:text-[14px] font-[400] text-gray-700 leading-relaxed">{product.description}</p>
                            <Link to={`${product.category}/${product.id}`} className="text-[13px] sm:text-[14px] mt-2 px-6 py-1 border border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
                                VIEW DETAILS
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CollectionCard;
