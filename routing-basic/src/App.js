import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Products } from './pages/Products';
import { MainContent } from './pages/MainContent';
import { Error } from './pages/Error';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainContent />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'products', element: <Products /> },
        { path: 'products/:productId', element: <ProductDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
