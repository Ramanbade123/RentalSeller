import React from "react";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const SmartphonesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  // Fallback data for Samsung Galaxy S24 Ultra
  const defaultProductData = {
    name: "Samsung Galaxy S24 Ultra",
    description:
      "The Samsung Galaxy S24 Ultra is a flagship smartphone featuring a stunning AMOLED display, a powerful quad-camera setup, and the iconic S Pen for productivity and creativity. Designed for professionals and enthusiasts, it offers top-tier performance with advanced AI features, a robust titanium frame, and long-lasting battery life.",
    dimensions: "162.3 x 79.0 x 8.6 mm",
    weight: "232 g",
    availableColors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X, QHD+ (3088 x 1440), 120Hz",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
      ram: "12GB",
      storage: "256GB / 512GB / 1TB",
      battery: "5000mAh with 45W fast charging",
      camera: "200MP (wide), 12MP (ultra-wide), 10MP (telephoto, 3x zoom), 10MP (periscope telephoto, 10x zoom), 12MP (front)",
      os: "Android 14 with One UI 6.1",
      other: "IP68 water and dust resistance, S Pen support, 5G connectivity",
    },
    price: 849,
    originalPrice: 999,
    stock: 80,
    reviews: [
      {
        user: "xuser007",
        rating: 5,
        comment: "Beast performance and stunning camera!",
      },
    ],
    image: "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
    backImage: "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
    thumbnails: [
      "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
      "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
      "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
      "https://pngimg.com/uploads/smartphone/smartphone_PNG8533.png",
    ],
  };

  // Merge incoming product data with default data to ensure all properties exist
  const productData = {
    ...defaultProductData,
    ...product, // Override default data with incoming product data (if any)
  };

  // Use the images from productData
  const mainImageFront = productData.image;
  const mainImageBack = productData.backImage || productData.image; // Fallback to front image if backImage is not provided
  const thumbnails = productData.thumbnails || defaultProductData.thumbnails;

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen flex justify-center">
      {/* Main Content Wrapper */}
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

        {/* Main Content with gap after navbar */}
        <main className="p-6 mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section: Images */}
            <div className="flex-1">
              {/* Main Images */}
              <div className="flex justify-center gap-4 mb-4">
                <img
                  src={mainImageFront}
                  alt={`${productData.name} front`}
                  className="w-48 h-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load front image: ${mainImageFront}`);
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
                <img
                  src={mainImageBack}
                  alt={`${productData.name} back`}
                  className="w-48 h-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load back image: ${mainImageBack}`);
                    e.target.src = "https://via.placeholder.com/150";
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
                      console.error(`Failed to load thumbnail image: ${thumbnail}`);
                      e.target.src = "https://via.placeholder.com/50";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="flex-1">
              {/* Product Title */}
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
                      <span className="font-semibold">RAM: </span>
                      {productData.specs.ram}
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
                      <span className="font-semibold">Camera: </span>
                      {productData.specs.camera}
                    </li>
                    <li>
                      <span className="font-semibold">OS: </span>
                      {productData.specs.os}
                    </li>
                    <li>
                      <span className="font-semibold">Other: </span>
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
                  <h2 className="text-lg font-semibold mb-4">Reviews</h2>
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

export default SmartphonesPage;