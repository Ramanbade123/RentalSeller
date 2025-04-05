import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/${product.category}/${product.id}`} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.profileImg} alt={product.name} className="w-full h-48 object-cover mb-3" />
            <h2 className="text-xl font-medium">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
            <p className="text-lg font-semibold text-green-600">₹{product.offeredPrice}</p>
        </Link>
    );
};

export default ProductCard;
