import { useOutletContext, Link } from 'react-router-dom';
import ShopItem from './ShopItem';
import '../styles/Shop.css';
import Loading from './Loading';
import Error from './Error';

function Shop() {
  const { items, loading, error } = useOutletContext();

  return (
    <div className="shop-items">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
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
