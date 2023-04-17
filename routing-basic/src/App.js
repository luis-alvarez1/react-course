import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Products } from './pages/Products';
import { Root } from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'products', element: <Products /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
