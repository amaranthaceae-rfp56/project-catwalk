import React from 'react';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.jsx';


const RelatedItemCard = ({ pageProduct, cardProduct }) => {
  return (
    <div>
      <img src={cardProduct.img} />
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
  cardProduct: PropTypes.object.isRequired
};

export default RelatedItemCard;
