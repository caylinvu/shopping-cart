import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

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
    let quantity = selectedItems.reduce(function (total, obj) {
      return total + Number(obj.quantity);
    }, 0);
    setTotalQuantity(quantity);

    let cost = selectedItems.reduce(function (total, obj) {
      return total + obj.quantity * obj.price;
    }, 0);
    setTotalCost(cost);
  }, [selectedItems]);

  return (
    <>
      <ScrollToTop />
      <NavBar totalQuantity={totalQuantity} />
      <Outlet context={{ items, selectedItems, setSelectedItems, totalQuantity, totalCost }} />
    </>
  );
}

export default App;

// TO DO

// add style to button clicks

// maybe add a max input to fields

// maybe add links to items on cart page (image and title)

// maybe add colors and borders to var properties

// make responsive

// add loading page and error stuff for api fetch

// refactor code and break things out into more components

// create updateCart function for cart change to reduce redundant code (pass through updated quantity)

// make quantity component

//

// STYLING

//
