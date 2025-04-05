import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaLock, FaEnvelope, FaGlobe } from 'react-icons/fa';

const RentourLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 py-6 px-8 text-center">
          <h1 className="text-2xl font-bold text-white">Become A Rentour Partner Today!</h1>
          <p className="text-blue-100 mt-2">
            Create a Rentour partner account and manage your rental properties with ease
          </p>
        </div>

        {/* Login Form */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Login with Password</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number/Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email or phone"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500">
              Reset password
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="space-y-3 text-center">
            <Link 
              to="/register" 
              className="block text-blue-600 hover:text-blue-500 font-medium"
            >
              Create a new account
            </Link>
            <Link 
              to="/global-partner" 
              className="block text-blue-600 hover:text-blue-500 font-medium flex items-center justify-center"
            >
              <FaGlobe className="mr-2" />
              Register as Global Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentourLogin;