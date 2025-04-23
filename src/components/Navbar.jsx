import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const isCartPage = location.pathname === '/cart'; // Check if the current page is the cart page

  return (
    <nav
      style={{
        position:'sticky', // Fixed for cart page, sticky for others
        top: 0,
        background: '#fff',
        zIndex: 1000,
        padding: '10px 0',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5px',
        }}
      >
        {/* Home Button */}
        <Link to="/" className="navbar-link">Home</Link>

        {/* Header (Visible only on Home Page) */}
        {location.pathname === '/' && (
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', textAlign: 'center', flex: 1 }}>
            Welcome to Shopsy...
          </h1>
        )}

        {/* Cart Button */}
        <Link to="/cart" className="navbar-link">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;