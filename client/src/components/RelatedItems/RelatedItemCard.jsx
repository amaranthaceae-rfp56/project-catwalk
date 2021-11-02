import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.jsx';


const RelatedItemCard = ({ pageProduct, cardProductId }) => {
  const [cardProduct, setCardProduct] = useState({});
  const [thumbnail, setThumbnail] = useState('');
  const API_URL = 'http://localhost:3000/api/products';
  const requestOptions = {
    method: 'GET',
  };
  useEffect(() => {
    fetch(`${API_URL}/${cardProductId}`, requestOptions)
      .then(response => response.json())
      .then(obj => setCardProduct(obj));
    // get thumbnail_url photo
    fetch(`${API_URL}/${cardProductId}/styles`, requestOptions)
      .then(response => response.json())
      .then(data => setThumbnail(data.results[0].photos[0].thumbnail_url));
  }, []);
  return Object.keys(cardProduct).length > 0 && (
    <div>
      <img src={thumbnail} />
      <CompareModal left={pageProduct} right={cardProduct} />
      <p>{cardProduct.category}</p>
      <h4>{cardProduct.name}</h4>
      <p>{cardProduct.default_price}</p>
      <p>{cardProduct.review}</p>
    </div>
  );
};

RelatedItemCard.propTypes = {
  pageProduct: PropTypes.object.isRequired,
  cardProductId: PropTypes.number.isRequired
};

export default RelatedItemCard;
