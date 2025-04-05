import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DescriptionForm = () => {
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
    navigate('/upload-image');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Full-width Information Panel with Background */}
      <div className="lg:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
        <div className="absolute inset-0 bg-indigo-900/80"></div>
        <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">What is a listing?</h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                A listing refers to the process of registering your product on the RenTour platform, making it visible to customers, and enabling them to view and purchase your product. It involves creating a detailed product page that includes essential information such as product title, description, images, pricing, and other relevant details.
              </p>
              
              <div className="bg-white/20 p-5 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Did you know?</h3>
                    <p className="text-white/90">
                      Providing precise and comprehensive information about your product, along with clear and captivating images, can increase its visibility on our platform by up to 15%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-2/3 bg-gray-50 p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">List Your Product</h1>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-8 right-8 h-1 bg-gray-200 z-0">
                <div className="h-full bg-indigo-600 w-1/3"></div>
              </div>
              {['Description', 'Upload Image', 'Finalize'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${index === 0 ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-500 bg-white'}`}>
                    {index + 1}
                  </div>
                  <span className={`mt-1 text-xs ${index === 0 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-5">
            {/* Product Information */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                      className="w-full mt-2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Specify your category"
                      required
                    />
                  )}
                </div>
              </div>
            </section>

            {/* Pricing & Stock */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing & Stock</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">NRP</span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-8 w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="How many in stock?"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Dimensions */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Dimensions (Optional)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{ name: 'length', label: 'Length (mm)' }, { name: 'width', label: 'Width (mm)' }, { name: 'height', label: 'Height (mm)' }, { name: 'weight', label: 'Weight (kg)' }].map((dim) => (
                  <div key={dim.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{dim.label}</label>
                    <input
                      type="number"
                      name={dim.name}
                      value={formData.dimensions[dim.name]}
                      onChange={handleDimensionChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="0"
                      step={dim.name === 'weight' ? "0.01" : "1"}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Description*</h2>
                <span className="text-sm text-gray-500">
                  {formData.description.length}/1200
                </span>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px]"
                placeholder="Describe your product features, specifications, etc..."
                maxLength="1200"
                required
              />
            </section>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-end">
            <button
              className="flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
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

export default DescriptionForm;