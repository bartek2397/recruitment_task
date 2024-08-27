import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const lastViewedProductId = localStorage.getItem('lastViewedProductId')

  return (
    <div className='home'>
      <Navbar />
      {lastViewedProductId && (
        <Link to={`/products/${lastViewedProductId}`}>View Last Browsed Product</Link>
      )}
      <p>Hello There! Wanna browse our products?</p>
      
    </div>
  )
}

export default App
