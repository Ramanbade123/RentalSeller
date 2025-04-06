import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Finalize = () => {
  const navigate = useNavigate();
  const [deliveryOption, setDeliveryOption] = useState('');
  const [returnAddress, setReturnAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [complaintDescription, setComplaintDescription] = useState('');

  const deliveryOptions = [
    { id: 'indrive', name: 'InDrive' },
    { id: 'pathao', name: 'Pathao' },
    { id: 'self', name: 'Self Delivery' },
    { id: 'other', name: 'Other' }
  ];

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setReturnAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      deliveryOption,
      returnAddress,
      complaintDescription
    };
    console.log('Form submitted:', formData);
    navigate('/confirmation');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans">
      {/* Left Side - Information Panel with Background */}
      <div className="lg:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
        <div className="absolute inset-0 bg-gray-800/90"></div>
        <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Finalize Your Listing</h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                You're almost done! The final step is to set up your delivery options and return policy. These details help build trust with customers and ensure smooth transactions.
              </p>
              
              <div className="bg-gray-700/80 p-5 rounded-lg backdrop-blur-sm border border-gray-600">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Pro Tip</h3>
                    <p className="text-gray-200">
                      Clear return policies and delivery options can increase your conversion rate by up to 30%. Customers appreciate transparency!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/80 p-5 rounded-lg backdrop-blur-sm border border-gray-600">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Secure Your Sales</h3>
                    <p className="text-gray-200">
                      Providing accurate return address information helps prevent disputes and ensures smooth returns processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-2/3 bg-white p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Stepper */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Complete Your Listing</h1>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-8 right-8 h-1 bg-gray-200 z-0">
                <div className="h-full bg-gray-700 w-full"></div>
              </div>
              {['Description', 'Media', 'Finalize'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    index <= 2 ? 'bg-gray-700 text-white' : 'border border-gray-300 text-gray-500 bg-white'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`mt-1 text-xs ${index <= 2 ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-5">
            {/* Delivery Options */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Delivery Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliveryOptions.map(option => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={option.id}
                      name="deliveryOption"
                      value={option.id}
                      checked={deliveryOption === option.id}
                      onChange={() => setDeliveryOption(option.id)}
                      className="h-4 w-4 text-gray-700 focus:ring-gray-500"
                    />
                    <label htmlFor={option.id} className="ml-2 block text-sm text-gray-700">
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </section>

            {/* Return Address */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Return Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
                  <input
                    type="text"
                    name="street"
                    value={returnAddress.street}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                  <input
                    type="text"
                    name="city"
                    value={returnAddress.city}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code*</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={returnAddress.postalCode}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                  <input
                    type="text"
                    name="country"
                    value={returnAddress.country}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Complaints Handling */}
            <section className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Returns & Complaints Policy</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Describe how you'll handle returns/complaints
                </label>
                <textarea
                  value={complaintDescription}
                  onChange={(e) => setComplaintDescription(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 min-h-[120px]"
                  placeholder="Example: 'We accept returns within 14 days of delivery. Items must be unused and in original packaging. Contact us first to initiate a return...'"
                />
              </div>
            </section>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button 
              type="button"
              onClick={() => navigate('/upload-images')}
              className="flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={!deliveryOption || !returnAddress.street || !returnAddress.city || !returnAddress.postalCode || !returnAddress.country}
              className={`flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm ${
                (!deliveryOption || !returnAddress.street || !returnAddress.city || !returnAddress.postalCode || !returnAddress.country) 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-800'
              }`}
            >
              Submit Listing
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalize;