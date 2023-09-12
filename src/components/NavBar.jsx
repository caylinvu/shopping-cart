import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';

function NavBar({ totalQuantity }) {
  return (
    <div className="header">
      <div className="shop-name">
        <Link to="/">Shopaholics</Link>
      </div>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link">
          <img src="/cart.svg" alt="" />
          <span>{totalQuantity < 100 ? totalQuantity : '99+'}</span>
        </Link>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  totalQuantity: PropTypes.number,
};

export default NavBar;
