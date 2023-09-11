import { useOutletContext, Link } from 'react-router-dom';
import ShopItem from './ShopItem';
import '../styles/Shop.css';

function Shop() {
  const { items } = useOutletContext();

  return (
    <div className="shop-items">
      {items.map((obj) => {
        let link = '/shop/' + obj.id;
        return (
          <Link to={link} key={obj.id}>
            <ShopItem imgUrl={obj.image} title={obj.title} price={obj.price} />
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
