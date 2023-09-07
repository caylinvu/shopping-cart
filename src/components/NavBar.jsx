import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="header">
      <div className="shop-name">
        <Link to="/">Shop Name</Link>
      </div>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
}

export default NavBar;
