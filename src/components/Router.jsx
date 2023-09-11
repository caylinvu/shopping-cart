import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import ItemPage from './ItemPage';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/shop/:item', element: <ItemPage /> },
        { path: '/cart', element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
