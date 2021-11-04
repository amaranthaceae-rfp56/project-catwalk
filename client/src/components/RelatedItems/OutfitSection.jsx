import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import rightArrow from '../../../assets/forwardArrow.svg';
import '../../styles/sections/_outfit.scss';


const OutfitSection = () => {
  const username = window.location.search.slice(10);
  const [pageProduct, setPageProduct] = useState({});
  const [outfitList, setOutfitList] = useState([]);

  const base_url = 'http://localhost:3000';

  useEffect(() => {
    fetch(`${base_url}/api/products/40344`)
      .then(response => response.json())
      .then(data => setPageProduct(data));
    fetchOutfitList();
  }, []);

  const fetchOutfitList = () => {
    fetch(`${base_url}/outfit/${username}`)
      .then(response => response.json())
      .then(data => setOutfitList(data));
  };

  const addToList = () => {
    fetch(`${base_url}/outfit/${username}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    })
      .then(() => {
        fetch(`${base_url}/outfit/${username}`)
          .then(response => response.json())
          .then(data => setOutfitList(data));
      })
  };

  return (
    <div className="outfit-card-container">
      <p>YOUR OUTFIT</p>
      <div data-testid={'Outfit-Items'} className="Outfit-Items">
        <button onClick={addToList}
          className="outfit-button">Add to Outfit</button>
        {outfitList.map((productId, index) =>
          <OutfitCard
            key={index}
            productId={productId}
            username={username}
            fetchOutfitList={fetchOutfitList}
          />)}
        <img src={rightArrow} />
      </div>
    </div>
  );
}

export default OutfitSection;