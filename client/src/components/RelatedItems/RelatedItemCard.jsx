import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.jsx';
import '../../styles/sections/_related.scss';



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
    <div className="related-card outer">
      <img src={thumbnail} className="thumbnail-style inner-card1"/>
      <CompareModal left={pageProduct} right={cardProduct} />
      <p className="inner-card2">{cardProduct.category}</p>
      <h4 className="inner-card3">{cardProduct.name}</h4>
      <p className="inner-card4">{cardProduct.default_price}</p>
      <p className="inner-card5">{cardProduct.review}</p>
    </div>
  );
};

RelatedItemCard.propTypes = {
  pageProduct: PropTypes.object.isRequired,
  cardProductId: PropTypes.number.isRequired
};

export default RelatedItemCard;
