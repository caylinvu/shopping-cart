import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CartItem.css';
import QuantityAdjuster from './QuantityAdjuster';

function CartItem({ objId, imgUrl, title, price, quantity, selectedItems, setSelectedItems }) {
  const updateCart = (newQuantity) => {
    let updatedItems = selectedItems.map((obj) => {
      if (obj.id == objId) {
        return { ...obj, quantity: newQuantity };
      } else {
        return obj;
      }
    });
    setSelectedItems(updatedItems);
  };

  const handleInput = (e) => {
    if (e.target.value > 0 && e.target.value <= 99) {
      updateCart(Number(e.target.value));
    } else if (e.target.value > 99) {
      updateCart(Number(99));
    } else if (e.target.value == '' || e.target.value == 0) {
      updateCart('');
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateCart(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity == '') {
      updateCart(Number(1));
    } else if (quantity < 99) {
      updateCart(quantity + 1);
    }
  };

  const deleteItem = () => {
    let updatedItems = selectedItems.filter((obj) => obj.id != objId);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="cart-item">
      <div className="img-container3">
        <Link to={'/shop/' + objId}>
          <img src={imgUrl} alt="" />
        </Link>
      </div>
      <div className="cart-info">
        <div className="price-info">
          <div className="singular">
            <Link to={'/shop/' + objId}>
              <h3>{title}</h3>
            </Link>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className="multiplied">${(quantity * price).toFixed(2)}</div>
        </div>
        <div className="more-info">
          <QuantityAdjuster
            quantity={quantity}
            handleDecrease={handleDecrease}
            handleInput={handleInput}
            handleIncrease={handleIncrease}
          />
          <button className="delete-btn" onClick={deleteItem}>
            <img src="/delete.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  objId: PropTypes.number,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
};

export default CartItem;
