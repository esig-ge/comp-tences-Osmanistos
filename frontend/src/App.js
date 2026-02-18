import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(res => {
        if (!res.ok) {
          throw new Error("Erreur serveur");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="container">
      <h1>Liste des produits</h1>

      <div className="grid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p>ID : {product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
