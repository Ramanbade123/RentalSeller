import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const productCategories = [
        { name: "Mobiles", icon: "/featureproducts/mobile.svg", path: "/mobiles" },
        { name: "Laptops", icon: "/featureproducts/laptop.svg", path: "#" },
        { name: "Cameras", icon: "/featureproducts/camera.svg", path: "#" },
        { name: "iPads", icon: "/featureproducts/tablet.svg", path: "#" },
        { name: "Headphones", icon: "/featureproducts/headphone.svg", path: "#" },
        { name: "Drones", icon: "/featureproducts/drone.svg", path: "#" },
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
