import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
