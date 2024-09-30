// src/components/ProductManagement.js
import React, { useState } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");

  const handleAddProduct = () => {
    setProducts([...products, product]);
    setProduct("");
  };

  return (
    <div className="container mt-5">
      <h2>Manage Products</h2>
      <input
        type="text"
        className="form-control"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Add a product"
      />
      <button className="btn btn-primary mt-2" onClick={handleAddProduct}>
        Add Product
      </button>

      <ul className="list-group mt-3">
        {products.map((prod, index) => (
          <li key={index} className="list-group-item">
            {prod}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
