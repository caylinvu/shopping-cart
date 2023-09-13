import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CartItem.css';

function CartItem({ objId, imgUrl, title, price, quantity, selectedItems, setSelectedItems }) {
  const cartChange = (e) => {
    if (e.target.value > 0 && e.target.value <= 99) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: Number(e.target.value) };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    } else if (e.target.value > 99) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: Number(99) };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    } else if (e.target.value == '' || e.target.value == 0) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: '' };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    }
  };

  const cartDecrease = () => {
    if (quantity > 1) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: obj.quantity - 1 };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    }
  };

  const cartIncrease = () => {
    if (quantity == '') {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: Number(1) };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    } else if (quantity < 99) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == objId) {
          return { ...obj, quantity: obj.quantity + 1 };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
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
          <div className="quantity">
            <button className="increment-btn" onClick={cartDecrease}>
              <img src="/minus.svg" alt="" />
            </button>
            <input type="text" value={quantity} pattern="^[0-9]*$" onChange={cartChange} />
            <button className="increment-btn" onClick={cartIncrease}>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
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
  quantity: PropTypes.number,
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
};

export default CartItem;
