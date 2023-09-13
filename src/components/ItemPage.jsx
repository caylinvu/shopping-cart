import { useParams, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ItemPage.css';

function ItemPage() {
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const { items, selectedItems, setSelectedItems } = useOutletContext();
  const { item } = useParams();

  const handleInput = (e) => {
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

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
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
          return { ...obj, quantity: obj.quantity + quantity };
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
                  <div className="quantity">
                    <button className="increment-btn" onClick={handleDecrease}>
                      <img src="/minus.svg" alt="" />
                    </button>
                    <input type="text" value={quantity} pattern="^[0-9]*$" onChange={handleInput} />
                    <button className="increment-btn" onClick={handleIncrease}>
                      <img src="/plus.svg" alt="" />
                    </button>
                  </div>
                  <button className="add-btn" disabled={isDisabled} onClick={() => addItem(obj)}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="item-bottom">
                <h3>Description</h3>
                <p>{obj.description}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ItemPage;
