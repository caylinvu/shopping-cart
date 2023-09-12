import { useParams, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ItemPage.css';

function ItemPage() {
  const [quantity, setQuantity] = useState(1);
  const { items } = useOutletContext();
  const { item } = useParams();

  const handleInput = (e) => {
    if (e.target.value > 0) {
      setQuantity(Number(e.target.value));
    } else if (e.target.value == '' || e.target.value == 0) {
      setQuantity('');
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
    } else {
      setQuantity(quantity + 1);
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
                  <button className="add-btn">Add to Cart</button>
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
