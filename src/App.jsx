import './styles/App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const itemData = await response.json();
        setItems(itemData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let result = selectedItems.reduce(function (total, obj) {
      return total + obj.quantity;
    }, 0);
    setTotalQuantity(result);
  }, [selectedItems]);

  return (
    <>
      <NavBar totalQuantity={totalQuantity} />
      <Outlet context={{ items, selectedItems, setSelectedItems }} />
    </>
  );
}

export default App;

// TO DO

// finish styling item page

// add ability to add items to cart

//// display running quantity of items in cart on shopping cart

//// display items in cart

// create cart page

// make navbar stick to top when scrolling

// add loading page and error stuff for api fetch

//

// STYLING

//
