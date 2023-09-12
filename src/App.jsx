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
      <NavBar totalQuantity={totalQuantity} />
      <Outlet context={{ items, selectedItems, setSelectedItems, totalQuantity, totalCost }} />
    </>
  );
}

export default App;

// TO DO

// add quantity functions to cart

// add delete function to cart

// create updateCart function for cart change to reduce redundant code (pass through updated quantity)

// if no items in cart, show message and add button to return to shopping

// make quantity component

// make navbar stick to top when scrolling

// add loading page and error stuff for api fetch

// maybe change item card border radius to 10px

// maybe change how quantity works on cart page???

//

// STYLING

//
