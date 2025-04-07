import React from 'react';
import { FiShoppingCart, FiStar, FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  // Fallback data if no product is passed
  const productData = product || {
    name: "Nova X1 Pro",
    description: "Flagship smartphone with AMOLED display and quad camera setup",
    price: 849,
    originalPrice: 999,
    stock: 80,
    reviews: [
      {
        user: "xuser007",
        rating: 4,
        comment: "Beast performance and stunning camera!"
      }
    ]
  };

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen">
      {/* Header with back button */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <FiArrowLeft className="mr-2" size={20} />
          Back
        </button>
      </header>

      {/* Product Details */}
      <main className="p-6 max-w-2xl mx-auto">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
        <p className="text-gray-600 mb-6">{productData.description}</p>

        {/* Price Section */}
        <div className="mb-8">
          <span className="text-3xl font-bold">¥{productData.price}</span>
          {productData.originalPrice && (
            <span className="text-xl text-gray-500 line-through ml-2">¥{productData.originalPrice}</span>
          )}
          <span className="block text-green-600 mt-1">Stock: {productData.stock}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center">
          <FiShoppingCart className="mr-2" />
          Add to Cart
        </button>

        {/* Reviews Section */}
        {productData.reviews && productData.reviews.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            
            {productData.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <span className="font-medium mr-2">{review.user}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MobileDetails;