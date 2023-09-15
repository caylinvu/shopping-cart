import { useOutletContext } from 'react-router-dom';
import '../styles/Shop.css';
import Loading from './Loading';
import Error from './Error';
import ShopItem from './ShopItem';

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
            return (
              <ShopItem
                key={obj.id}
                objId={obj.id}
                imgUrl={obj.image}
                title={obj.title}
                price={obj.price}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default Shop;
