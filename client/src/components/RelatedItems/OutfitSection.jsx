import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitSection = () => {
  const username = window.location.search.slice(10);
  const [pageProduct, setPageProduct] = useState({});
  const [outfitList, setOutfitList] = useState([]);

  const base_url = 'http://localhost:3000';

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`${base_url}/api/products/40344`, requestOptions)
      .then(response => response.json())
      .then(data => setPageProduct(data));
    fetch(`${base_url}/outfit/${username}`)
      .then(response => response.json())
      .then(data => setOutfitList(data));
  }, []);

  const addToList = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    };
    fetch(`${base_url}/outfit/${username}`, requestOptions)
      .then(() => {
        fetch(`${base_url}/outfit/${username}`)
          .then(response => response.json())
          .then(data => setOutfitList(data));
      })
  };

  return (
    <div data-testid={'Outfit-Items'}>
      <p>YOUR OUTFIT</p>
      <button onClick={addToList}>Add to Outfit</button>
      {outfitList.map((productId, index) => <OutfitCard key={index} productId={productId} />)}

    </div>
  );
}

export default OutfitSection;