import { Link } from "react-router-dom"; // Add this import
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <div className="card">
      {/* Wrap the image and title in a Link */}
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => toggleWishlist(product)}>Wishlist</button>
    </div>
  );
}