import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.jsx';
import '../../styles/sections/_related.scss';

import rightArrow from '../../../assets/forwardArrow.svg';


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
    <div className="related-card-container">
      <div  className="related-card">

      <CompareModal left={pageProduct} right={cardProduct} />
      <img src={thumbnail}
       className="thumbnail-style inner-card1"/>
      <p className="category-style">{cardProduct.category}</p>
      <h4 className="releateName-style">{cardProduct.name}</h4>
      <p className="price-style">{cardProduct.default_price}</p>
      <p className="inner-card5">{cardProduct.review}</p>

      </div>

    </div>
  );
};

RelatedItemCard.propTypes = {
  pageProduct: PropTypes.object.isRequired,
  cardProductId: PropTypes.number.isRequired
};

export default RelatedItemCard;
