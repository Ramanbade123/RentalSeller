import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const productCategories = [
        { name: "Mobiles", icon: "/featureproducts/mobile.svg", path: "/collections/mobiles" },
        { name: "Laptops", icon: "/featureproducts/laptop.svg", path: "/collections/laptops" },
        { name: "Cameras", icon: "/featureproducts/camera.svg", path: "/collections/cameras" },
        { name: "iPads", icon: "/featureproducts/tablet.svg", path: "/collections/ipads" },
        { name: "Headphones", icon: "/featureproducts/headphone.svg", path: "/collections/headphones" },
        { name: "Drones", icon: "/featureproducts/drone.svg", path: "/collections/drones" },
    ];

    return (
        <div className="h-[13dvh] rounded-md flex shrink-0 flex-nowrap  items-center justify-center w-full">
            {productCategories.map((product, index) => (
                <Link to={product.path} key={index} className="flex h-full w-[15%] flex-col items-center justify-center ">
                    <img src={product.icon} alt={product.name} className="w-full h-[60%] object-contain" />
                    <span className="text-[16px] font-mono font-medium">{product.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default ProductCategory;
