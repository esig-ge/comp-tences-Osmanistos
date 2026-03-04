import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

/* ---------------- Loader ---------------- */
export function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Chargement...</p>
    </div>
  );
}

/* ---------------- TeleportButton ---------------- */
export function TeleportButton() {
  return (
    <Link to="/" className="btn "> ← Retour </Link>
  );
}

/* ---------------- ProductCard ---------------- */
export function ProductCard({ product }) {
  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>{product.name}</h1>
      <p><strong>ID :</strong> {product.id}</p>
      {product.price && <p className="price">{product.price} CHF</p>}
      {product.description && (
        <p style={{ marginTop: "15px", color: "#555" }}>{product.description}</p>
      )}
    </div>
  );
}

/* ---------------- ProductCardItem (pour la liste) ---------------- */
export function ProductCardItem({ product }) {
  return (
    <div className="card" key={product.id}>
      <div className="card-content">
        <h2>{product.name}</h2>
        {product.price && <p className="price">{product.price} CHF</p>}
      </div>
      <Link to={`prod/${product.id}`} className="btn">
        Voir les détails
      </Link>
    </div>
  );
}