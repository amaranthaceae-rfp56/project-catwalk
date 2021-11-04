import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_related.scss';


const OutfitCard = ({ productId, username, fetchOutfitList }) => {
  const [cardProduct, setCardProduct] = useState({});
  const [thumbnail, setThumbnail] = useState('');
  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    fetch(`${API_URL}/${productId}`)
      .then(response => response.json())
      .then(obj => setCardProduct(obj));
    // get thumbnail_url photo
    fetch(`${API_URL}/${productId}/styles`)
      .then(response => response.json())
      .then(data => setThumbnail(data.results[0].photos[0].thumbnail_url));
  }, []);

  const deleteOutfit = () => {
    fetch(`http://localhost:3000/outfit/${username}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productId })
    })
    fetchOutfitList();
  };

  return Object.keys(cardProduct).length > 0 && (
    <div className="outfit-card">
      <img src={thumbnail} />
      <button onClick={deleteOutfit}>x</button>
      <p>{cardProduct.category}</p>
      <h4>{cardProduct.name}</h4>
      <p>{cardProduct.default_price}</p>
      <p>{cardProduct.review}</p>
    </div>
  );
};

OutfitCard.propTypes = {
  productId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  fetchOutfitList: PropTypes.object.isRequired,

};

export default OutfitCard;