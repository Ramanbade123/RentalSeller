import React from "react";
import { FaUserCheck, FaThLarge, FaCreditCard, FaUndo } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaUserCheck className="text-3xl text-black mr-4" />
          <div>
            <h3 className="text-lg font-bold">Sign Up & Verify</h3>
            <p className="text-gray-600 text-sm">Quick and secure account setup</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaThLarge className="text-3xl text-black mr-4" />
          <div>
            <h3 className="text-lg font-bold">Browse & Pick</h3>
            <p className="text-gray-600 text-sm">Browse from selected student-friendly items</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaCreditCard className="text-3xl text-black mr-4" />
          <div>
            <h3 className="text-lg font-bold">Pay & Rent</h3>
            <p className="text-gray-600 text-sm">eSewa, Khalti, or cash on pickup</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaUndo className="text-3xl text-black mr-4" />
          <div>
            <h3 className="text-lg font-bold">Return & Review</h3>
            <p className="text-gray-600 text-sm">Hassle-free returns and quick deposit refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
