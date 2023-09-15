import '../styles/Home.css';
import { useOutletContext, Link } from 'react-router-dom';
import ShopItem from './ShopItem';

function Home() {
  const { items, loading, error } = useOutletContext();

  return (
    <>
      <div className="introduction">
        <h1>The best place to get your shopping fix</h1>
        <p>
          Looking for a dose of retail therapy? Haven&apos;t run your card in 24 hours? Need
          something to splurge on? Craving packages at your doorstep? Get your fix here with the
          hottest items on the market at unbeatable prices. We&apos;re here when you need us most.
          Shopaholics: for shopping addicts, by shopping addicts.
        </p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="featured">
        <h2>Featured Items</h2>
        {loading ? (
          <img src="/loading.svg" alt="" className="loading" />
        ) : error ? (
          <div className="error">
            There is a problem fetching the shop data - {error}. Please try again.
          </div>
        ) : (
          <div className="featured-items">
            {items.slice(0, 4).map((obj) => {
              let link = '/shop/' + obj.id;
              return (
                <Link to={link} key={obj.id}>
                  <ShopItem imgUrl={obj.image} title={obj.title} price={obj.price} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
