import PropTypes from 'prop-types';
import '../styles/CartItem.css';

function CartItem({ imgUrl, title, price, quantity }) {
  return (
    <div className="cart-item">
      <div className="img-container3">
        <img src={imgUrl} alt="" />
      </div>
      <div className="cart-info">
        <div className="price-info">
          <div className="singular">
            <h3>{title}</h3>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className="multiplied">${(quantity * price).toFixed(2)}</div>
        </div>
        <div className="more-info">
          <div className="quantity">
            <button className="increment-btn">
              <img src="/minus.svg" alt="" />
            </button>
            <input type="text" value={quantity} pattern="^[0-9]*$" />
            <button className="increment-btn">
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <button className="delete-btn">
            <img src="/delete.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartItem;
