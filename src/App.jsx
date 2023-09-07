import './styles/App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;

// TO DO

// add basic styling to navbar

// create home page

// create shop page

// create cart page
