import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <h2>Your cart</h2>
      <p>Your cart is empty! Click below to start shopping.</p>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
