import React from "react";
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Create your free account
        </h2>
        <form>
          {/* Name Fields */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mt-4 border border-gray-300 rounded-full outline-none focus:border-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mt-4 border border-gray-300 rounded-full outline-none focus:border-blue-500"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mt-4 border border-gray-300 rounded-full outline-none focus:border-blue-500"
          />

          {/* Login Redirect */}
          <p className="text-center text-sm mt-4">
            Already a user?{" "}
            <a href="/login" className="text-blue-600 font-semibold">
              Login
            </a>
          </p>

          {/* Signup Button */}
          <Link to="/Homepage">
           <button className="w-full bg-blue-600 text-white py-3 rounded-full mt-4 text-lg font-semibold hover:bg-blue-700 transition">
            Sign Up
          </button>
          </Link>
         
        </form>
      </div>
    </div>
  );
};

export default Signup;
