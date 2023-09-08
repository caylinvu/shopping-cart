import '../styles/Home.css';

function Home() {
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
        <button>Shop Now</button>
      </div>
      <div className="featured">
        <h2>Featured Items</h2>
        {/* insert featured items here */}
      </div>
    </>
  );
}

export default Home;
