import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiDollarSign, FiShield, FiStar, FiCheck, FiArrowRight } from 'react-icons/fi';

const Homepage = () => {
  const heroImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      description: "Flagship smartphone with AMOLED display and quad camera setup",
      image: "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
      price: 849,
      detailsRoute: "/products/smartphones"
    },
    {
      id: 2,
      name: "MacBook Pro 16\" M3 Max",
      description: "Professional laptop with Apple M3 Max chip",
      image: "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
      price: 3499,
      detailsRoute: "/products/laptops"
    },
    {
      id: 3,
      name: "Sony A7 IV Mirrorless Camera",
      description: "Professional full-frame mirrorless camera",
      image: "https://www.photowarehouse.co.nz/assets/pi/i2/1022562.jpg",
      price: 2499,
      detailsRoute: "/products/cameras"
    },
    {
      id: 4,
      name: "Apple Watch Ultra 2",
      description: "Premium smartwatch for athletes and adventurers",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/111832-watch-ultra-2.png",
      price: 799,
      detailsRoute: "/products/smartwatches"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Remi Electronics saved me hundreds when I needed a high-end laptop for a short project. The process was seamless!",
      author: "Sarah K.",
      rating: 5
    },
    {
      id: 2,
      quote: "As a frequent traveler, renting phones for different countries has been a game-changer. Highly recommend!",
      author: "Michael T.",
      rating: 5
    },
    {
      id: 3,
      quote: "The camera equipment I rented was in perfect condition and helped me complete my client project on budget.",
      author: "David P.",
      rating: 4
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black-90 bg-opacity"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-white">Remi Electronics </span>
            <span className="text-blue-400">Smarter</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10">
            Get the latest gadgets without the hefty price tag
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center"
            >
              <FiShoppingCart className="mr-2" /> Become a Buyer
            </Link>
            <Link 
              to="/login" 
              className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg transition duration-300 flex items-center justify-center"
            >
              <FiDollarSign className="mr-2" /> Become a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Remi Electronics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Remi Electronics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <FiDollarSign className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cost Effective</h3>
              <p className="text-gray-600">Save up to 70% compared to buying new. Pay only for the time you need.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <FiShield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Reliable Quality</h3>
              <p className="text-gray-600">All devices are professionally inspected and come with warranties.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <FiCheck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Latest Models</h3>
              <p className="text-gray-600">Regularly updated inventory with newest releases from top brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Right Now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6 flex flex-col items-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-48 h-48 object-contain mb-4 block"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-center">{product.description}</p>
                  <div className="mt-4 text-lg font-semibold text-gray-800">${product.price}</div>
                  <Link 
                    to={product.detailsRoute}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    View Details <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-gray-700">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-800">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Smart Renting?</h2>
          <p className="text-xl text-gray-200 mb-10">Join thousands of satisfied customers enjoying premium electronics without the premium price.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products"
              className="px-8 py-4 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Browse Products
            </Link>
            <Link 
              to="/howitworks"
              className="px-8 py-4 border border-white text-white font-medium rounded-lg hover:bg-gray-700 transition duration-300"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;