import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiFilter, FiX, FiPlus, FiMinus } from 'react-icons/fi';

const Products = () => {
  // Sample product data with optimized image URLs
  const allProducts = [
    // Smartphones
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      category: "smartphones",
      price: 1199,
      image: "https://images.samsung.com/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv.jpg",
      description: "Flagship smartphone with S Pen and 200MP camera",
      inStock: true,
      quantity: 1
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      category: "smartphones",
      price: 1299,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009278906",
      description: "Titanium design with A17 Pro chip",
      inStock: true,
      quantity: 1
    },

    // Smartwatches
    {
      id: 3,
      name: "Apple Watch Ultra 2",
      category: "smartwatches",
      price: 799,
      image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/111832-watch-ultra-2.png",
      description: "Rugged smartwatch for athletes",
      inStock: true,
      quantity: 1
    },
    {
      id: 4,
      name: "Samsung Galaxy Watch 6",
      category: "smartwatches",
      price: 349,
      image: "https://images.samsung.com/is/image/samsung/p6pim/id/2307/gallery/id-galaxy-watch6-r945-sm-r940nzkaxse-537405500?$684_547_PNG$",
      description: "Advanced health monitoring",
      inStock: true,
      quantity: 1
    },

    // Headphones
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "headphones",
      price: 399,
      image: "https://www.sony.com/is/image/gwtprod/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha&wid=515&hei=515&trf=trim",
      description: "Industry-leading noise cancellation",
      inStock: true,
      quantity: 1
    },
    {
      id: 6,
      name: "AirPods Max",
      category: "headphones",
      price: 549,
      image: "https://help.apple.com/assets/673D1566902AEA8557045FB2/673D1574A739A4528A02AF54/en_US/be407fad48c9ccafcd87007eb6645d61.png",
      description: "Premium over-ear headphones",
      inStock: false,
      quantity: 1
    },

    // Drones
    {
      id: 7,
      name: "DJI Mavic 3 Pro",
      category: "drones",
      price: 2199,
      image: "https://www-cdn.djiits.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c@374*374.png",
      description: "Professional aerial photography drone",
      inStock: true,
      quantity: 1
    },

    // Cameras
    {
      id: 8,
      name: "Sony A7 IV",
      category: "cameras",
      price: 2499,
      image: "https://fdn.gsmarena.com/imgroot/news/21/10/sony-as74/-1200/gsmarena_001.jpg",
      description: "Full-frame mirrorless camera",
      inStock: true,
      quantity: 1
    }
  ];

  // State management
  const [products, setProducts] = useState(allProducts);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);

  // Categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'smartwatches', name: 'Smartwatches' },
    { id: 'headphones', name: 'Headphones' },
    { id: 'drones', name: 'Drones' },
    { id: 'cameras', name: 'Cameras' }
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Filter by price range
  const priceFilteredProducts = filteredProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Add to wishlist
  const addToWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!wishlist.some(item => item.id === productId)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  // Add to cart
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-8 font-sans" style={{ marginTop: '80px' }}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block bg-white p-4 rounded-lg shadow`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button 
              onClick={() => setShowFilters(false)} 
              className="md:hidden text-gray-600 hover:text-gray-800"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-700">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-gray-200 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="3000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-gray-600"
              />
              <div className="flex justify-between mt-2 text-gray-600">
                <span>₹0</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-lg shadow text-gray-700 hover:bg-gray-50"
          >
            <FiFilter /> Filters
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceFilteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-contain p-4"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
                    }}
                  />
                  <button
                    onClick={() => 
                      wishlist.some(item => item.id === product.id) 
                        ? removeFromWishlist(product.id) 
                        : addToWishlist(product.id)
                    }
                    className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow ${
                      wishlist.some(item => item.id === product.id) 
                        ? 'text-red-500' 
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <FiHeart size={20} fill={wishlist.some(item => item.id === product.id) ? 'currentColor' : 'none'} />
                  </button>
                  {!product.inStock && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                      Out of Stock
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <p className="font-bold text-lg mb-4 text-gray-900">₹{product.price}</p>

                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      product.inStock 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {priceFilteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2 text-gray-800">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 md:right-4 md:bottom-4 md:left-auto bg-white shadow-xl rounded-t-lg md:rounded-lg z-10 border-t border-gray-200 md:border md:w-96">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Your Cart ({cart.length})</h2>
              <button 
                onClick={() => setCart([])}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Clear All
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center py-3 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/100x100?text=Image";
                      }}
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">₹{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="mx-2 w-8 text-center text-gray-700">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <FiPlus size={14} />
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-red-500 hover:text-red-700"
                    >
                      <FiX size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between font-bold text-lg text-gray-800">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;