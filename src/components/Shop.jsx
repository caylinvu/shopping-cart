import { useOutletContext, Link } from 'react-router-dom';
import ShopItem from './ShopItem';
import '../styles/Shop.css';

function Shop() {
  const { items, loading, error } = useOutletContext();

  return (
    <div className="shop-items">
      {loading ? (
        <img src="/loading.svg" alt="" className="loading" />
      ) : error ? (
        <div className="error">
          There is a problem fetching the shop data - {error}. Please try again.
        </div>
      ) : (
        <>
          {items.map((obj) => {
            let link = '/shop/' + obj.id;
            return (
              <Link to={link} key={obj.id}>
                <ShopItem imgUrl={obj.image} title={obj.title} price={obj.price} />
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Shop;
