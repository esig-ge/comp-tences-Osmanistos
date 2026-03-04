import React, { useEffect, useState } from "react";
import { Loader, ProductCardItem } from "./components";
import "./App.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader message="Chargement des produits..." />;

  return (
    <div className="page">
      <header className="header">
        <h1>🛍️ Notre Catalogue</h1>
        <p>Découvrez nos produits disponibles</p>
      </header>

      <div className="grid">
        {products.map(product => (
          <ProductCardItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;