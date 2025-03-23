import React from "react";
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones } from "react-icons/fa";

const CategorySection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center p-10 bg-gray-100 rounded-lg">
      {/* Left Side - Text */}
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-900">
          Find what you need – <span className="text-blue-600">Fast & Easy</span>
        </h2>
      </div>

      {/* Right Side - Categories */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: <FaMobileAlt />, label: "Smartphones" },
          { icon: <FaLaptop />, label: "Laptops" },
          { icon: <FaCamera />, label: "Cameras" },
          { icon: <FaHeadphones />, label: "Accessories" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-32 h-32 hover:scale-105 transition-transform"
          >
            <div className="text-4xl text-blue-600">{item.icon}</div>
            <span className="mt-2 text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
