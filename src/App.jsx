import './styles/App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

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

  return (
    <>
      <NavBar></NavBar>
      <Outlet context={{ items, selectedItems }} />
    </>
  );
}

export default App;

// TO DO

// add quantity input and incrementing buttons to item page

// finish styling item page

// add ability to add items to cart

// create cart page

// add loading page and error stuff for api fetch

//

// STYLING

//
