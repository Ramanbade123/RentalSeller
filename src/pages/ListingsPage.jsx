import React, { useState, useEffect } from 'react';
import {
  FiEdit, FiTrash2, FiPlus, FiChevronLeft, FiChevronRight,
  FiHome, FiPieChart, FiBox, FiUsers
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/getitems/');
        console.log(response);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setListings(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-white shadow-sm transition-all duration-200 border-r border-gray-200 flex flex-col`}>
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            {sidebarOpen ? (
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-800 rounded-md flex items-center justify-center text-white font-medium">
                  RT
                </div>
                <span className="font-bold text-gray-800">RenTour</span>
              </div>
            ) : (
              <div className="h-8 w-8 bg-gray-800 rounded-md mx-auto flex items-center justify-center text-white font-medium">
                RT
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100"
            >
              {sidebarOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
            </button>
          </div>

          <nav className="mt-6 flex-1">
            {[
              { name: "Dashboard", icon: <FiHome size={18} />, id: "dashboard", route: "/dashboard" },
              { name: "Analytics", icon: <FiPieChart size={18} />, id: "analytics", route: "/analytics" },
              { name: "Listings", icon: <FiBox size={18} />, id: "listings", route: "/listings" },
              { name: "Customers", icon: <FiUsers size={18} />, id: "customers", route: "/customers" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  navigate(item.route);
                }}
                className={`flex items-center w-full px-4 py-3 text-sm transition-colors ${
                  activeTab === item.id
                    ? "bg-gray-100 text-gray-900 font-medium border-l-4 border-gray-800"
                    : "text-gray-600 hover:bg-gray-50 font-medium"
                }`}
              >
                <span className={`${sidebarOpen ? "mr-3" : "mx-auto"}`}>{item.icon}</span>
                {sidebarOpen && item.name}
              </button>
            ))}
          </nav>

          {/* Create Listing Button */}
          <div className="p-4 border-t border-gray-200 mt-auto">
            <button
              onClick={() => navigate("/productdetails")}
              className="flex items-center w-full px-4 py-3 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              <FiPlus className={sidebarOpen ? "mr-3" : "mx-auto"} />
              {sidebarOpen && "Create Listing"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8 font-sans">
            {/* Header with Add New button */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">My Listings</h1>
              <button
                onClick={() => navigate("/productdetails")}
                className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiPlus className="mr-2" />
                Add New Listing
              </button>
            </div>

            {/* Listings Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {listings.length > 0 ? (
                      listings.map((listing) => (
                        <tr key={listing.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{listing.name}</div>
                            <div className="text-sm text-gray-600">{listing.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            Rs.{listing.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            {listing.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                            {listing.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              listing.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEdit(listing)}
                              className="text-gray-600 hover:text-gray-900 mr-4"
                              title="Edit"
                            >
                              <FiEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(listing.id)}
                              className="text-gray-600 hover:text-gray-900"
                              title="Delete"
                            >
                              <FiTrash2 />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-gray-600">
                          No listings found. Create your first listing!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Search</a>
            </div>
            <div className="text-sm text-gray-600">
              © Copyright 2025 BenTour. Kathmandu, Nepal
            </div>
          </div>
        </div>
      </footer>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {currentListing.id ? 'Edit Listing' : 'Add New Listing'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={currentListing.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rs.)</label>
                    <input
                      type="number"
                      name="price"
                      value={currentListing.price}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={currentListing.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <input
                        type="text"
                        name="category"
                        value={currentListing.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={currentListing.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-gray-800"
                    >
                      {currentListing.id ? 'Update Listing' : 'Create Listing'}
                    </button>
                  </div>
                </div>
              </form>

              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingsPage;