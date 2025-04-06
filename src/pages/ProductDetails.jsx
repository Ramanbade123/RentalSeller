import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [formData, setFormData] = useState({
    title: '',
    quantity: '',
    price: '',
    dimensions: { length: '', width: '', height: '', weight: '' },
    description: '',
    category: '',
    customCategory: ''
  });

  const categories = [
    'Laptops',
    'Smartphones',
    'Headphones',
    'Cameras',
    'Drones',
    'Other (Specify)'
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      dimensions: { ...prev.dimensions, [name]: value }
    }));
  };

  const handleNextClick = () => {
    navigate('/upload-images');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans text-gray-800 bg-white">
      {/* Left Side - Information Panel */}
      <div className="lg:w-1/3 bg-gray-900 text-white">
        <div className="p-8 h-full flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Sell Smart on RenTour</h1>
            
            {/* Benefits Section */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-700 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-100 font-medium">Reach Millions of Buyers</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Join our marketplace of 10M+ active users looking for quality products like yours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-700 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-100 font-medium">Trusted Transactions</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Our secure payment system protects both buyers and sellers for worry-free transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-700 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-100 font-medium">Low Selling Fees</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Only 5% commission on successful sales - one of the lowest rates in the market.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Tips Section */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-gray-200 font-medium mb-3">How to Create a Winning Listing</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Use clear, high-resolution photos (minimum 3 images)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Write detailed descriptions with specifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Set competitive prices based on market trends</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Respond quickly to buyer inquiries (avg. response time shown)</span>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div className="text-center text-sm text-gray-400">
              <p>Need help? <a href="#" className="text-gray-300 hover:text-white underline">Contact our seller support</a></p>
              <p className="mt-1">Average listing approval time: 2-4 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-2/3 bg-white p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Product Listing</h1>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-8 right-8 h-1 bg-gray-200 z-0">
                <div className="h-full bg-gray-700 w-1/3"></div>
              </div>
              {['Description', 'Upload Image', 'Finalize'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${index === 0 ? 'bg-gray-800 text-white' : 'border border-gray-300 text-gray-500 bg-white'}`}>
                    {index + 1}
                  </div>
                  <span className={`mt-1 text-xs ${index === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-5">
            {/* Product Information */}
            <section className="bg-white p-5 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {formData.category === 'Other (Specify)' && (
                    <input
                      type="text"
                      name="customCategory"
                      value={formData.customCategory}
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Specify your category"
                      required
                    />
                  )}
                </div>
              </div>
            </section>

            {/* Pricing & Stock */}
            <section className="bg-white p-5 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing & Stock</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-8 w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                      placeholder="0.00"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available Quantity*</label>
                  <input
                    type="number"
                    name="quantity"
                    min="0"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                    placeholder="How many in stock?"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Dimensions */}
            <section className="bg-white p-5 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Dimensions (Optional)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{ name: 'length', label: 'Length (mm)' }, { name: 'width', label: 'Width (mm)' }, { name: 'height', label: 'Height (mm)' }, { name: 'weight', label: 'Weight (kg)' }].map((dim) => (
                  <div key={dim.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{dim.label}</label>
                    <input
                      type="number"
                      name={dim.name}
                      value={formData.dimensions[dim.name]}
                      onChange={handleDimensionChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400"
                      placeholder="0"
                      step={dim.name === 'weight' ? "0.01" : "1"}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-900">Description*</h2>
                <span className="text-sm text-gray-500">
                  {formData.description.length}/1200
                </span>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-gray-400 focus:border-gray-400 min-h-[120px]"
                placeholder="Describe your product features, specifications, etc..."
                maxLength="1200"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Include key features, condition, and any relevant details about the product.
              </p>
            </section>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-end">
            <button
              className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded text-sm font-medium hover:bg-gray-700 transition-colors"
              onClick={handleNextClick}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;