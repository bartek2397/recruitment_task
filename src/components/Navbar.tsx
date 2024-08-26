import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <ul className="navbar">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
    </ul>
  )
}

export default Navbar