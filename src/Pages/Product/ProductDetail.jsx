import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "/src/Data/products.json";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // track loading

    useEffect(() => {
        const found = products.find(p => p.id === Number(id));
        setProduct(found);
        setLoading(false); // done loading
    }, [id])

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const alreadyInCart = cart.find(item => item.id === product.id);

        if (!alreadyInCart) {
            cart.push({ ...product, quantity: 1 });
        } else {
            alreadyInCart.quantity += 1;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
    };

    if (loading) return <div className="p-6 text-center">Loading product...</div>;
    if (!product) return <div className="p-6 text-center text-red-500">Product not found.</div>;

    return (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
            {/* Product Image + Thumbnails */}
            <div>
                <img
                    src={product.profileImg}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg shadow"
                />
                <div className="flex gap-2 mt-4">
                    {product.images?.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Product thumbnail ${i}`}
                            className="w-20 h-20 object-cover border rounded"
                        />
                    ))}
                </div>
            </div>

            {/* Product Info */}
            <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600 my-3">{product.description}</p>

                <div className="my-4">
                    <p className="text-xl text-green-600 font-semibold">₹{product.offeredPrice}</p>
                    <p className="line-through text-gray-400">₹{product.originalPrice}</p>
                </div>

                <p className="text-sm text-gray-500">Stock: {product.stock}</p>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>

                {/* Reviews */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                    {product.reviews?.length > 0 ? (
                        product.reviews.map((review, idx) => (
                            <div key={idx} className="border-t pt-3 mt-3">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={review.profileImg}
                                        alt="user"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <p className="font-medium">{review.user}</p>
                                </div>
                                <p className="text-yellow-500">⭐ {review.rating}</p>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail