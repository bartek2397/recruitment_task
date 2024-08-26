import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Products from './routes/products.tsx'
import Productpage from './routes/singleProduct.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    )
  },
  {
    path: '/products',
    element: (
      <Products />
    )
  },
  {
    path: '/products/:productId',
    element: <Productpage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
