import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div >
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='product-inventory'>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-grid">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-inventory-btn">
          <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
          <Link
            to="/checkout"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              marginleft: '350px',
            }}
          >
            Proceed to Checkout
          </Link>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Cart;