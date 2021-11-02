import React, { useState, useEffect } from 'react';

const OutfitSection = () => {
  const [pageProduct, setPageProduct] = useState({});

  const base_url = 'http://localhost:3000/api/products';

  // define current page product
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`${base_url}/40344`, requestOptions)
      .then(response => response.json())
      .then(data => setPageProduct(data));
  }, []);

  useEffect((username) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    };
    fetch(`http://localhost:3000/outfit/${username}`, requestOptions)
      .then(response => response.json())
  }, []);

  return (
    <div data-testid={'Outfit-Items'}>
      <span>YOUR OUTFIT</span>
      <button >Add to Outfit</button>
    </div>
  );
}

export default OutfitSection;