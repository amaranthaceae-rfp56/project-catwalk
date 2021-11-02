import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const OutfitCard = ({ productId }) => {
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
  return Object.keys(cardProduct).length > 0 && (
    <div>
      <img src={thumbnail} />
      <p>{cardProduct.category}</p>
      <h4>{cardProduct.name}</h4>
      <p>{cardProduct.default_price}</p>
      <p>{cardProduct.review}</p>
    </div>
  );
};

OutfitCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default OutfitCard;