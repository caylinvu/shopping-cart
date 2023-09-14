import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';

function NavBar({ totalQuantity, showMenu, toggleMenu }) {
  return (
    <div className="header">
      <div className="main-nav">
        <div className="shop-name">
          <Link to="/">Shopaholics</Link>
        </div>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart" className="cart-link">
            <img src="/cart.svg" alt="" />
            <span>{totalQuantity < 100 ? totalQuantity : '99+'}</span>
          </Link>
          <button className="menu-btn" onClick={toggleMenu}>
            <img src="/menu.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={showMenu ? 'dropdown show' : 'dropdown'}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  totalQuantity: PropTypes.number,
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default NavBar;
