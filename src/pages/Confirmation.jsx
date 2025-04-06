import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // In a real app, you would receive the product data from the form submission or API
  // For demo purposes, we'll use mock data
  const productData = {
    title: "Vintage Leather Jacket",
    price: "$120",
    category: "Fashion > Jackets",
    condition: "Excellent",
    description: "Genuine leather jacket from the 90s in perfect condition. Size M.",
    images: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    ],
    deliveryOption: "Pathao",
    returnAddress: {
      street: "123 Main St",
      city: "Dhaka",
      postalCode: "1207",
      country: "Bangladesh"
    },
    returnPolicy: "We accept returns within 14 days of delivery. Items must be unused and in original packaging. Contact us first to initiate a return."
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircleIcon className="mx-auto h-16 w-16 text-gray-700" />
          <h1 className="mt-3 text-3xl font-bold text-gray-900">Your Product Has Been Listed Successfully!</h1>
          <p className="mt-2 text-lg text-gray-600">
            Your item is now live and visible to potential buyers. Here are the details:
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Product Images */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Product Images</h2>
            <div className="grid grid-cols-2 gap-4">
              {productData.images.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Title</p>
                <p className="font-medium">{productData.title}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price(NRP)</p>
                <p className="font-medium">{productData.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{productData.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Condition</p>
                <p className="font-medium">{productData.condition}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Description</p>
              <p className="font-medium">{productData.description}</p>
            </div>
          </div>

          {/* Shipping & Return Info */}
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Shipping & Return Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Delivery Option</p>
                <p className="font-medium">{productData.deliveryOption}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Return Address</p>
                <p className="font-medium">
                  {productData.returnAddress.street}, {productData.returnAddress.city}<br />
                  {productData.returnAddress.postalCode}, {productData.returnAddress.country}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Return Policy</p>
              <p className="font-medium">{productData.returnPolicy}</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-800 mb-3">Next Steps</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Your listing is now active and visible to buyers</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">You'll receive notifications when buyers show interest</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700">You can manage your listing from your dashboard</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate('/listings')}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            View Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;