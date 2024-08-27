import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import type { Product } from "../utils/types";


export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortKey, setSortKey] = useState('default');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

    const sortProducts = (key: string) => {
        let sortedProducts;
        if (key === sortKey) {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          setSortOrder('asc');
        }
        setSortKey(key);
    
        if (key === 'default') {
          sortedProducts = [...products].sort((a, b) => a.id - b.id);
        } else {
          sortedProducts = [...products].sort((a, b) => {
            if (key === 'title') {
              return sortOrder === 'asc' 
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
            } else if (key === 'price') {
              return sortOrder === 'asc' 
                ? a.price - b.price
                : b.price - a.price;
            }
          });
        }
        setProducts(sortedProducts);
      };
    
      if (loading) return <div><ClipLoader color="#ad86f1"/></div>;
      if (error) return <div>{error}</div>;

    return (
        <>
        <div className="sorting">
        <p>Sort by:</p>
        <button onClick={() => sortProducts('default')}>
          Default {sortKey === 'default' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
        <button onClick={() => sortProducts('title')}>
          Sort by Title {sortKey === 'title' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
        <button onClick={() => sortProducts('price')}>
          Sort by Price {sortKey === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
      </div>
            <div className="cardsContainer">
                {products.map((product) => (
                    <Link to={`/products/${product.id}`}>
                        <ProductCard key={product.id} title={product.title} price={product.price} imageSrc={product.image} />
                    </Link>
                ))}
            </div>
        </>
    )
}