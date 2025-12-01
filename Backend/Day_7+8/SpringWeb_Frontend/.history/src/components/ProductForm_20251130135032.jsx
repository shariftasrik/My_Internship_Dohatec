import { useState } from "react";

export default function ProductForm() {
  const [prodId, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const saveProduct = async () => {
    await fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prodId: Number(prodId),
        prodName: name,
        price: Number(price)
      })
    });

    alert("Product added!");
  };

  return (
    <div>
      <h2>Add Product</h2>

      <input placeholder="Prod ID" onChange={e => setId(e.target.value)} />
      <br />

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br />

      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <br />

      <button onClick={saveProduct}>Save</button>
    </div>
  );
}
