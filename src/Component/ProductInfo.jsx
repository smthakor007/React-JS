import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>
    </div>
  );
}
