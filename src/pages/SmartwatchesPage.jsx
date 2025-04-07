import React from "react";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const SmartwatchesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  // Fallback data for Apple Watch Ultra 2
  const defaultProductData = {
    name: "Apple Watch Ultra 2",
    description:
      "The Apple Watch Ultra 2 pushes the boundaries of what a smartwatch can do. With an ultra-durable titanium case, advanced health monitoring features, and unmatched battery life, it's built for athletes and adventurers. Features include ECG, blood oxygen monitoring, and depth gauge for diving.",
    dimensions: "49 x 44 x 14.4 mm",
    weight: "61.3 g",
    availableColors: ["Titanium Case with Ocean Band", "Titanium Case with Trail Loop", "Titanium Case with Alpine Loop"],
    specs: {
      display: "Always-On Retina LTPO OLED, 410 x 502 pixels",
      processor: "Apple S9 SiP",
      battery: "Up to 36 hours (normal use), up to 72 hours in low power mode",
      waterResistance: "WR100, EN13319 (diving to 40m)",
      healthFeatures: "ECG, blood oxygen, temperature sensing, heart rate monitoring",
      connectivity: "GPS + Cellular, Wi-Fi, Bluetooth 5.3",
      materials: "Aerospace-grade titanium, sapphire crystal",
      other: "Dual speakers, three-microphone array, Action button, Depth app with depth gauge",
    },
    price: 799,
    originalPrice: 899,
    stock: 35,
    reviews: [
      {
        user: "adventureSeeker",
        rating: 5,
        comment: "Survived a week-long hiking trip with battery to spare! The GPS tracking is incredibly accurate.",
      },
      {
        user: "fitnessPro",
        rating: 4,
        comment: "Best fitness tracker I've used, though a bit bulky for everyday wear.",
      },
    ],
    image: "https://pngimg.com/uploads/watch/watch_PNG9856.png",
    backImage: "https://pngimg.com/uploads/watch/watch_PNG9856.png",
    thumbnails: [
      "https://pngimg.com/uploads/watch/watch_PNG9856.png",
      "https://pngimg.com/uploads/watch/watch_PNG9856.png",
      "https://pngimg.com/uploads/watch/watch_PNG9856.png",
    ],
  };

  const productData = {
    ...defaultProductData,
    ...product,
  };

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen flex justify-center">
      <div className="w-full max-w-5xl">
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FiArrowLeft className="mr-2" size={20} />
            Back
          </button>
        </header>

        <main className="p-6 mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex justify-center gap-4 mb-4">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-48 h-auto object-contain"
                  onError={(e) => e.target.src = "https://via.placeholder.com/200"}
                />
                <img
                  src={productData.backImage}
                  alt={`${productData.name} back`}
                  className="w-48 h-auto object-contain"
                  onError={(e) => e.target.src = "https://via.placeholder.com/200"}
                />
              </div>
              <div className="flex justify-center gap-2">
                {productData.thumbnails.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-contain border border-gray-200 rounded-md cursor-pointer hover:border-gray-400"
                    onError={(e) => e.target.src = "https://via.placeholder.com/50"}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
              <p className="text-gray-600 mb-4">{productData.description}</p>

              <div className="mb-4">
                <span className="text-2xl font-bold">₹{productData.price}</span>
                {productData.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-2">₹{productData.originalPrice}</span>
                )}
              </div>

              <p className="text-gray-600 mb-4">Stock: {productData.stock}</p>
              <p className="text-gray-600 mb-4"><span className="font-semibold">Dimensions:</span> {productData.dimensions}</p>
              <p className="text-gray-600 mb-4"><span className="font-semibold">Weight:</span> {productData.weight}</p>

              <div className="mb-4">
                <p className="text-gray-600 font-semibold">Available Bands:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {productData.availableColors.map((color, index) => (
                    <li key={index}>{color}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li><span className="font-semibold">Display:</span> {productData.specs.display}</li>
                  <li><span className="font-semibold">Processor:</span> {productData.specs.processor}</li>
                  <li><span className="font-semibold">Battery:</span> {productData.specs.battery}</li>
                  <li><span className="font-semibold">Water Resistance:</span> {productData.specs.waterResistance}</li>
                  <li><span className="font-semibold">Health Monitoring:</span> {productData.specs.healthFeatures}</li>
                  <li><span className="font-semibold">Connectivity:</span> {productData.specs.connectivity}</li>
                </ul>
              </div>

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300 flex items-center justify-center">
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>

              {productData.reviews.length > 0 && (
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
                                className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
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

export default SmartwatchesPage;