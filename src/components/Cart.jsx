import { useOutletContext, Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/Cart.css';

function Cart() {
  const { selectedItems, setSelectedItems, totalQuantity, totalCost } = useOutletContext();

  const clearCart = () => {
    setSelectedItems([]);
  };

  return (
    <div className="cart-page">
      {selectedItems.length > 0 ? (
        <div className="cart">
          <h2>Your cart ({totalQuantity} items)</h2>
          <div className="cart-container">
            <div className="cart-items">
              {selectedItems.map((obj) => {
                return (
                  <CartItem
                    key={obj.id}
                    objId={obj.id}
                    imgUrl={obj.image}
                    title={obj.title}
                    price={obj.price}
                    quantity={obj.quantity}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                  />
                );
              })}
            </div>
            <div className="checkout-container">
              <p className="checkout-total">
                Total: <span>${totalCost.toFixed(2)}</span>
              </p>
              <button className="checkout-btn" onClick={clearCart}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Your cart</h2>
          <p>Your cart is empty! Click below to start shopping.</p>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
