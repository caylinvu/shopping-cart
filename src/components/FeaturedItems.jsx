import { useOutletContext } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import ShopItem from './ShopItem';

function FeaturedItems() {
  const { items, loading, error } = useOutletContext();

  return (
    <div className="featured">
      <h2>Featured Items</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="featured-items">
          {items.slice(0, 4).map((obj) => {
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
        </div>
      )}
    </div>
  );
}

export default FeaturedItems;
