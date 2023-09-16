import PropTypes from 'prop-types';

function CheckoutContainer({ totalCost, clearCart }) {
  return (
    <div className="checkout-container">
      <p className="checkout-total">
        Total: <span>${totalCost.toFixed(2)}</span>
      </p>
      <button className="checkout-btn" onClick={clearCart}>
        Checkout
      </button>
    </div>
  );
}

CheckoutContainer.propTypes = {
  totalCost: PropTypes.number,
  clearCart: PropTypes.func,
};

export default CheckoutContainer;
