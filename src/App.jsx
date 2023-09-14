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
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <ScrollToTop setShowMenu={setShowMenu} />
      <NavBar totalQuantity={totalQuantity} showMenu={showMenu} toggleMenu={toggleMenu} />
      <Outlet context={{ items, selectedItems, setSelectedItems, totalQuantity, totalCost }} />
    </>
  );
}

export default App;

// TO DO

// figure out right way to do toggle menu thing

// make responsive

// add loading page and error stuff for api fetch

// maybe store frequently used colors/borders to var properties

// refactor code and break things out into more components

// create updateCart function for cart change to reduce redundant code (pass through updated quantity)

// make quantity component

// maybe add checkout function that clears cart???
