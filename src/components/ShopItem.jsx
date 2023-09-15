import PropTypes from 'prop-types';
import '../styles/ShopItem.css';
import { Link } from 'react-router-dom';

function ShopItem({ objId, imgUrl, title, price }) {
  return (
    <Link to={'/shop/' + objId}>
      <div className="shop-item">
        <div className="img-container">
          <img src={imgUrl} alt="" />
        </div>
        <div className="txt-container">
          <h3>{title.length < 60 ? title : title.slice(0, 59) + '...'}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}

ShopItem.propTypes = {
  objId: PropTypes.number,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ShopItem;
