import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-up-details">
        <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
        </div>
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
      </div>

      <div className="product-down-details">
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;