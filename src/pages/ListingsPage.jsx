import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import DashboardLayout from '../Layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListingsPage = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentListing, setCurrentListing] = useState({
    id: null,
    name: '',
    price: '',
    description: '',
    status: 'Active',
    category: '',
    location: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsRes, deliveryRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/getitems/'),
          axios.get('http://127.0.0.1:8000/api/del/')
        ]);
  
        const items = itemsRes.data;
        const delivery = deliveryRes.data;
  
        const mergedListings = items.map(item => {
          const deliveryInfo = delivery.find(d => d.item === item.id); // <-- Corrected key match
          return {
            ...item,
            street_address: deliveryInfo?.street_address || 'N/A',
            city: deliveryInfo?.city || 'N/A',
          };
        });
  
        setListings(mergedListings);
  
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentListing(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentListing.id) {
      setListings(listings.map(listing =>
        listing.id === currentListing.id ? currentListing : listing
      ));
    } else {
      const newId = Math.max(...listings.map(l => l.id), 0) + 1;
      setListings([...listings, { ...currentListing, id: newId }]);
    }
    resetForm();
  };

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings(listings.filter(listing => listing.id !== id));
    }
  };

  const resetForm = () => {
    setCurrentListing({
      id: null,
      name: '',
      price: '',
      description: '',
      status: 'Active',
      category: '',
      location: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Latest Listing</h1>
        <button
          onClick={() => navigate("/productdetails")}
          className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FiPlus className="mr-2" />
          Add New Listing
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
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
                      <div className="font-medium text-gray-900">{listing.item_name}</div>
                      {/* <div className="text-sm text-gray-600">{listing.item_description}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      ${listing.final_item_price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {listing.item_category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {listing.street_address}, {listing.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        listing.status === 'Active'
                          ? 'bg-gray-200 text-gray-800'
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
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
    </div>
    
  );
};

export default ListingsPage;
