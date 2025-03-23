import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white text-center py-16 px-4 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">WELCOME TO RENTOUR</h1>
        <p className="mt-2 text-lg">Browse through our selection of rental items</p>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-orange-500 text-3xl mr-2">✱</span> Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: "laptop.jpg", name: "Laptop Rental", price: "NPR 500/day" },
            { img: "smartphone.jpg", name: "Smartphone Rental", price: "NPR 100/day" },
            { img: "camera.jpg", name: "Camera Rental", price: "NPR 400/day" },
          ].map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-300">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-orange-500 text-3xl mr-2">✱</span> Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "💻", name: "Laptops", description: "Explore our wide range of laptops for rent" },
            { icon: "📱", name: "Smartphones", description: "Rent the latest smartphones at affordable prices" },
            { icon: "🎧", name: "Noise-canceling Headphones", description: "Great for studying in noisy dorms" },
            { icon: "🖥️", name: "External Monitors", description: "For multitasking and projects" },
          ].map((category, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg shadow-md bg-white hover:bg-blue-50 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-500 text-white rounded-full mr-4">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-orange-500 text-3xl mr-2">✱</span> Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Falano Keto", review: "Great service and quality products!", rating: 5 },
            { name: "Falano Keti", review: "Easy to use the platform. Found what I needed quickly.", rating: 4 },
          ].map((review, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-300">
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg">{review.name}</span>
                <span className="ml-2 text-yellow-500 text-lg">{"★".repeat(review.rating)}</span>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
