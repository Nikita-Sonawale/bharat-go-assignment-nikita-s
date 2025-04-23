import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Thank you for your purchase, ${formData.name}!`);
    clearCart(); // Clear the cart after checkout
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Checkout</h1>
      <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleInputChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', resize: 'none' }}
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor:  '#49495c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;