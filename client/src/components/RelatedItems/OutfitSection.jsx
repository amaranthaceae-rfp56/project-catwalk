import React, { useState, useEffect } from 'react';

const OutfitSection = () => {
  const [pageProduct, setPageProduct] = useState({});

  const base_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

  // define current page product
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`${base_url}/products/40347`, requestOptions)
      .then(response => response.json())
      .then(data => setPageProduct(data));
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    };
    fetch('http://localhost:3000/outfit/:username', requestOptions)
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