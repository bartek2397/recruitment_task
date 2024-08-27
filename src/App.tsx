import { Link } from 'react-router-dom'
import './App.css'

function App() {

  const lastViewedProductId = localStorage.getItem('lastViewedProductId')

  return (
    <div className='home'>
        
        <p>Hello There! Wanna browse our products?</p>
        {lastViewedProductId && (
          <Link to={`/products/${lastViewedProductId}`}>Click here to check your last viewed product</Link>
        )}
      
      </div>
  )
  
}

export default App
