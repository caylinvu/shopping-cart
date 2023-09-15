import { useParams, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ItemPage.css';
import QuantityAdjuster from './QuantityAdjuster';

function ItemPage() {
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const { items, selectedItems, setSelectedItems } = useOutletContext();
  const { item } = useParams();

  const itemChange = (e) => {
    if (e.target.value > 0 && e.target.value <= 99) {
      setQuantity(Number(e.target.value));
      setIsDisabled(false);
    } else if (e.target.value > 99) {
      setQuantity(Number(99));
    } else if (e.target.value == '' || e.target.value == 0) {
      setQuantity('');
      setIsDisabled(true);
    }
  };

  const itemDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const itemIncrease = () => {
    if (quantity == '') {
      setQuantity(Number(1));
      setIsDisabled(false);
    } else if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const addItem = (desiredItem) => {
    if (selectedItems.some((obj) => obj.id == desiredItem.id)) {
      let updatedItems = selectedItems.map((obj) => {
        if (obj.id == desiredItem.id) {
          let tmpQuantity = Number(obj.quantity) + Number(quantity);
          if (tmpQuantity > 99) {
            return { ...obj, quantity: Number(99) };
          }
          return { ...obj, quantity: tmpQuantity };
        } else {
          return obj;
        }
      });
      setSelectedItems(updatedItems);
    } else {
      let newItem = { ...desiredItem, quantity: quantity };
      setSelectedItems([...selectedItems, newItem]);
    }
  };

  return (
    <div className="item-page">
      {items.map((obj) => {
        if (obj.id == item) {
          return (
            <div key={obj.id} className="item-info">
              <div className="item-top">
                <div className="img-container2">
                  <img src={obj.image} alt="" />
                </div>
                <div className="main-info">
                  <h2>{obj.title}</h2>
                  <p>${obj.price.toFixed(2)}</p>
                  <QuantityAdjuster
                    quantity={quantity}
                    handleDecrease={itemDecrease}
                    handleInput={itemChange}
                    handleIncrease={itemIncrease}
                  />
                  <button className="add-btn" disabled={isDisabled} onClick={() => addItem(obj)}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="item-bottom">
                <h3>Description</h3>
                <p>{obj.description}</p>
                <p>***Maximum quantity of 99 per item allowed in cart</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ItemPage;
