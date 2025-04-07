import React from "react";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const LaptopsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  // Fallback data for MacBook Pro M3 Max
  const defaultProductData = {
    name: "MacBook Pro 16\" M3 Max",
    description:
      "The MacBook Pro with M3 Max chip delivers exceptional performance for professionals. Featuring a stunning Liquid Retina XDR display, powerful CPU and GPU performance, and industry-leading battery life. Perfect for creative professionals, developers, and power users.",
    dimensions: "35.57 x 24.81 x 1.68 cm",
    weight: "2.16 kg",
    availableColors: ["Space Black", "Silver"],
    specs: {
      display: "16.2-inch Liquid Retina XDR, 3456 x 2234, 120Hz ProMotion",
      processor: "Apple M3 Max (16-core CPU, 40-core GPU)",
      memory: "48GB unified memory",
      storage: "1TB SSD (configurable up to 8TB)",
      battery: "Up to 22 hours battery life",
      ports: "Three Thunderbolt 4 ports, HDMI, SDXC slot, MagSafe 3",
      keyboard: "Backlit Magic Keyboard with Touch ID",
      other: "Six-speaker sound system, 1080p FaceTime HD camera, Wi-Fi 6E, Bluetooth 5.3",
    },
    price: 3499,
    originalPrice: 3999,
    stock: 45,
    reviews: [
      {
        user: "creativePro123",
        rating: 5,
        comment: "Handles 8K video editing like a dream! The display is absolutely stunning.",
      },
      {
        user: "devEngineer",
        rating: 4,
        comment: "Incredible performance, though I wish it had more USB-A ports.",
      },
    ],
    image: "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
    backImage: "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
    thumbnails: [
      "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
      "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
      "https://pngimg.com/uploads/laptop/laptop_PNG101764.png",
    ],
  };

  // Merge incoming product data with default data
  const productData = {
    ...defaultProductData,
    ...product,
  };

  const mainImageFront = productData.image;
  const mainImageBack = productData.backImage || productData.image;
  const thumbnails = productData.thumbnails || defaultProductData.thumbnails;

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Header with back button */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FiArrowLeft className="mr-2" size={20} />
            Back
          </button>
        </header>

        {/* Main Content */}
        <main className="p-6 mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section: Images */}
            <div className="flex-1">
              {/* Main Images */}
              <div className="flex justify-center gap-4 mb-4">
                <img
                  src={mainImageFront}
                  alt={`${productData.name} front`}
                  className="w-64 h-auto object-contain"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />
                <img
                  src={mainImageBack}
                  alt={`${productData.name} back`}
                  className="w-64 h-auto object-contain"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex justify-center gap-2">
                {thumbnails.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-contain border border-gray-200 rounded-md cursor-pointer hover:border-gray-400"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/50";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
              <p className="text-gray-600 mb-4">{productData.description}</p>

              {/* Price Section */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-800">
                  ₹{productData.price}
                </span>
                {productData.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-2">
                    ₹{productData.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock */}
              <p className="text-gray-600 mb-4">Stock: {productData.stock}</p>

              {/* Dimensions */}
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Dimensions: </span>
                {productData.dimensions}
              </p>

              {/* Weight */}
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Weight: </span>
                {productData.weight}
              </p>

              {/* Available Colors */}
              <div className="mb-4">
                <p className="text-gray-600 font-semibold">Available Colors:</p>
                {productData.availableColors && productData.availableColors.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-600">
                    {productData.availableColors.map((color, index) => (
                      <li key={index}>{color}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">Not specified</p>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Specifications:</h2>
                {productData.specs ? (
                  <ul className="list-disc list-inside text-gray-600">
                    <li>
                      <span className="font-semibold">Display: </span>
                      {productData.specs.display}
                    </li>
                    <li>
                      <span className="font-semibold">Processor: </span>
                      {productData.specs.processor}
                    </li>
                    <li>
                      <span className="font-semibold">Memory: </span>
                      {productData.specs.memory}
                    </li>
                    <li>
                      <span className="font-semibold">Storage: </span>
                      {productData.specs.storage}
                    </li>
                    <li>
                      <span className="font-semibold">Battery: </span>
                      {productData.specs.battery}
                    </li>
                    <li>
                      <span className="font-semibold">Ports: </span>
                      {productData.specs.ports}
                    </li>
                    <li>
                      <span className="font-semibold">Keyboard: </span>
                      {productData.specs.keyboard}
                    </li>
                    <li>
                      <span className="font-semibold">Other Features: </span>
                      {productData.specs.other}
                    </li>
                  </ul>
                ) : (
                  <p className="text-gray-600">Specifications not available</p>
                )}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300 flex items-center justify-center">
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>

              {/* Reviews Section */}
              {productData.reviews && productData.reviews.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
                  <div className="border-t border-gray-200 pt-4">
                    {productData.reviews.map((review, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex items-center mb-2">
                          <span className="font-medium mr-2">{review.user}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill={i < review.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LaptopsPage;