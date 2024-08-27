import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.tsx'
import './index.css'
import './App.css'
import Products from './routes/products.tsx'
import Productpage from './routes/singleProduct.tsx'
import Layout from './components/Layout.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <Productpage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
