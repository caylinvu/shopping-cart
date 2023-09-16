import { useOutletContext } from 'react-router-dom';
import FilledCart from './FilledCart';
import CheckoutContainer from './CheckoutContainer';
import EmptyCart from './EmptyCart';
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
            <FilledCart selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            <CheckoutContainer totalCost={totalCost} clearCart={clearCart} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
