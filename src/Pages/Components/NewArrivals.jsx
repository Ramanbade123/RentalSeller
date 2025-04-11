import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [typedText, setTypedText] = useState("");
    const typingInterval = useRef(null);


    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                const res = await axios.get(`${baseUrl}/products/new-arrivals`);
                setFilteredProducts(res.data);
            } catch (error) {
                console.error("Error fetching top sold products:", error);
            }
        };

        fetchNewArrivals();
    }, []);


    const handleMouseEnter = (desc, index) => {
        clearInterval(typingInterval.current);
        setHoveredIndex(index);
        let i = -1;
        setTypedText("");
        typingInterval.current = setInterval(() => {
            if (i < desc.length - 1) {
                setTypedText(prev => prev + desc[i]);
                i++;
            } else {
                clearInterval(typingInterval.current);
            }
        }, 9);
    };

    const handleMouseLeave = () => {
        clearInterval(typingInterval.current);
        setHoveredIndex(null);
        setTypedText("");
    };

    return (
        <div className="flex flex-col items-center h-fit py-14">
            <h2 className="text-3xl underline font-semibold mb-12 tracking-wider">
                NEW ARRIVALS
            </h2>

            <div className="flex flex-wrap justify-center gap-2 px-4">
                {filteredProducts.map((product, index) => (
                    <Link to={`${product.category}/${product.id}`}
                        key={index}
                        className="group bg-white relative w-[250px] h-[320px] rounded-xl overflow-hidden shadow-lg transition-all duration-[750ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:w-[350px] hover:h-[360px] hover:z-10"
                        onMouseEnter={() => handleMouseEnter(product.description, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={product.productAvatar}
                            alt={product.name}
                            className="w-full h-full object-contain transition-all !duration-[750ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-[1.1]"
                        />
                        <div className="absolute inset-0 flex items-end justify-center group-hover:bg-opacity-40 hover:bg-[rgba(0,0,0,0.2)] hover:backdrop-blur-[5px] transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                            <div className="p-3 text-white opacity-0 group-hover:animate-pulse
                                     group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] text-center">
                                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                                <p className="text-sm whitespace-pre-wrap">
                                    {hoveredIndex === index ? typedText : ""}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Link
                to="collections/new-arrivals"
                className="mt-10 underline text-sm text-black hover:text-gray-700 transition-all duration-300"
            >
                See More
            </Link>
        </div>
    );
};

export default NewArrivals;
