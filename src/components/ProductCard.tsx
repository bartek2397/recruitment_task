type ProductCardProps = {
    title: string;
    price: number;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="card">
        {title}
        <img src={imageSrc} alt="Product Image" className="cardImg" />
        <p>{price}</p>
    </div>
  )
}

export default ProductCard