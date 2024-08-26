import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}


export default function Products() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                console.log(products)
                return products
            } catch (error) {
                console.error("Error fetching product data:", error)
            }
        }

        fetchData()
    }, [])

    return (
            <div className="cardContainer">
                {products.map((product) => (
                    <Link to={`/products/${product.id}`}>
                        <ProductCard key={product.id} title={product.title} description={product.description} imageSrc={product.image} />
                    </Link>
                ))}
            </div>
    )
}