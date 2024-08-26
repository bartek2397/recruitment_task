type ProductCardProps = {
    title: string;
    description: string;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
        {title}
        <img src={imageSrc} alt="Product Image" />
        <p>{description}</p>
    </div>
  )
}

export default ProductCard