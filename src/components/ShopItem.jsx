import PropTypes from 'prop-types';
import '../styles/ShopItem.css';

function ShopItem({ imgUrl, title, price }) {
  return (
    <div className="shop-item">
      <div className="img-container">
        <img src={imgUrl} alt="" />
      </div>
      <div className="txt-container">
        <h3>{title}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ShopItem;
