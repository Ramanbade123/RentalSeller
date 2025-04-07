import React from "react";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const CamerasPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  // Fallback data for Sony A7 IV
  const defaultProductData = {
    name: "Sony A7 IV Mirrorless Camera",
    description:
      "The Sony A7 IV combines high-resolution imaging with impressive speed and autofocus performance. Featuring a 33MP full-frame sensor, 4K 60p video recording, and advanced AI-based autofocus, it's the perfect hybrid camera for both photographers and videographers.",
    dimensions: "131.3 x 96.4 x 79.8 mm",
    weight: "658 g (body only)",
    availableColors: ["Black"],
    specs: {
      sensor: "33MP Full-frame Exmor R CMOS",
      processor: "BIONZ XR",
      isoRange: "100-51200 (expandable to 50-204800)",
      autofocus: "759-point phase detection, Real-time Eye AF (human/animal/bird)",
      video: "4K 60p, 10-bit 4:2:2, S-Log3",
      stabilization: "5-axis in-body image stabilization (5.5 stops)",
      connectivity: "Wi-Fi, Bluetooth, USB-C, HDMI, dual SD slots",
      other: "3.69M-dot OLED viewfinder, 3.0\" vari-angle touchscreen LCD",
    },
    price: 2499,
    originalPrice: 2799,
    stock: 18,
    reviews: [
      {
        user: "proPhotographer",
        rating: 5,
        comment: "The autofocus is witchcraft - never misses focus even in challenging conditions.",
      },
      {
        user: "cinematographer",
        rating: 4,
        comment: "Excellent video quality, though I wish it had 6K recording.",
      },
    ],
    image: "https://pngimg.com/uploads/camera/camera_PNG102765.png",
    backImage: "https://pngimg.com/uploads/camera/camera_PNG102765.png",
    thumbnails: [
      "https://pngimg.com/uploads/camera/camera_PNG102765.png",
      "https://pngimg.com/uploads/camera/camera_PNG102765.png",
      "https://pngimg.com/uploads/camera/camera_PNG102765.png",
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
                  className="w-64 h-auto object-contain"
                  onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                />
                <img
                  src={productData.backImage}
                  alt={`${productData.name} back`}
                  className="w-64 h-auto object-contain"
                  onError={(e) => e.target.src = "https://via.placeholder.com/300"}
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

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Technical Specifications:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li><span className="font-semibold">Sensor:</span> {productData.specs.sensor}</li>
                  <li><span className="font-semibold">Processor:</span> {productData.specs.processor}</li>
                  <li><span className="font-semibold">ISO Range:</span> {productData.specs.isoRange}</li>
                  <li><span className="font-semibold">Autofocus:</span> {productData.specs.autofocus}</li>
                  <li><span className="font-semibold">Video:</span> {productData.specs.video}</li>
                  <li><span className="font-semibold">Stabilization:</span> {productData.specs.stabilization}</li>
                  <li><span className="font-semibold">Connectivity:</span> {productData.specs.connectivity}</li>
                  <li><span className="font-semibold">Other Features:</span> {productData.specs.other}</li>
                </ul>
              </div>

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300 flex items-center justify-center">
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>

              {productData.reviews.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4">Professional Reviews</h2>
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

export default CamerasPage;