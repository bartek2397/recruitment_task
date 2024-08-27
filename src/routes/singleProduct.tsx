import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
      rate: number,
      count: number
  }
}

export default function Productpage() {
    const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
        localStorage.setItem('lastViewedProductId', productId)
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div><ClipLoader color="#ad86f1"/></div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
      <>
      <p className="backLink">
        <Link to='/products'>{'<< '}Back to product list</Link>
      </p>
    <div className="product-page-box">
      <div className="product-page">
        <img src={product.image} alt={product.title} style={{maxWidth: '300px'}} />
        <div className="product-desc">
          <header>
            <h1>{product.title}</h1>
            <p><strong>Price:</strong> ${product.price}</p>
          </header>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
          <p>{product.rating.rate}/{product.rating.count}</p>
          <button className="product-btn">Add to cart</button>
        </div>
      </div>
    </div>
    </>
  );
}
