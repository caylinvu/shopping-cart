import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/Cart.css';

function Cart() {
  const { selectedItems, setSelectedItems, totalQuantity, totalCost } = useOutletContext();

  return (
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
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
