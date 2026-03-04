import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, TeleportButton, ProductCard } from "./components";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/prod/${id}/`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>Produit non trouvé</p>;

  return (
    <div className="page">
      <TeleportButton />
      <ProductCard product={product} />
    </div>
  );
}

export default ProductDetail;