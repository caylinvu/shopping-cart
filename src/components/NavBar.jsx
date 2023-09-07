import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="header">
      <div className="shop-name">
        <Link to="/">Shopaholics</Link>
      </div>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <img src="/cart.svg" alt="" />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
