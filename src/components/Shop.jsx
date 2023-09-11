import { useOutletContext } from 'react-router-dom';
import ShopItem from './ShopItem';
import '../styles/Shop.css';

function Shop() {
  const { items } = useOutletContext();

  return (
    <div className="shop-items">
      {items.map((obj) => {
        return <ShopItem key={obj.id} imgUrl={obj.image} title={obj.title} price={obj.price} />;
      })}
    </div>
  );
}

export default Shop;
