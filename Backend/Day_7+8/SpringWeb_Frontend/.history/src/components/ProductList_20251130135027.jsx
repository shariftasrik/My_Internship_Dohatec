import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    setProducts(data);
  };

  const deleteProd = async (id) => {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
    });
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <Link to="/products/add">Add Product</Link>
      <ul>
        {products.map(p => (
          <li key={p.prodId}>
            {p.prodName} - ${p.price}
            <button onClick={() => deleteProd(p.prodId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
