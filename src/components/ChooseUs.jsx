import React from "react";
import { FaDollarSign, FaSyncAlt, FaShieldAlt } from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaDollarSign />,
      title: "Affordable Prices",
      description: "Save money compared to buying.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Flexible Rentals",
      description: "Daily, weekly, or monthly.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Verified",
      description: "User verification ensures trusted rentals.",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-72 h-52 rounded-xl shadow-lg flex flex-col items-center justify-between bg-gray-100 p-5"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white text-3xl rounded-full shadow-lg transition-transform transform hover:scale-110">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black text-center mt-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm font-medium text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
