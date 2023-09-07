import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Shop Name</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
    </div>
  );
}

export default NavBar;
