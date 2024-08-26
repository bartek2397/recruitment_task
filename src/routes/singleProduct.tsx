import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
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
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{maxWidth: '300px'}} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}
