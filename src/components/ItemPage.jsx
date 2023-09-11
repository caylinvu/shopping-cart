import { useParams, useOutletContext } from 'react-router-dom';
import '../styles/ItemPage.css';

function ItemPage() {
  const { items } = useOutletContext();
  const { item } = useParams();

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
                  <div className="quantity">quantity adjuster</div>
                  <button>Add to Cart</button>
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
