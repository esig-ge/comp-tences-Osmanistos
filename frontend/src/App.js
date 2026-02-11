import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/actors/')
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <div>
      <h1>Liste des acteurs</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

