import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_outfit.scss';
import ReviewContext from '../../context/reviews/ReviewContext';
import ProductContext from '../../context/products/ProductContext';
import StarRating from '../sharedComponents/StarRating.jsx';

const OutfitCard = ({ productId, username, fetchOutfitList }) => {
  const productContext = useContext(ProductContext);

  const reviewContext = useContext(ReviewContext);
  const { currentStyle } = productContext;
  const [cardProduct, setCardProduct] = useState({});
  const { reviewMeta: { avgRatings } } = reviewContext;
  const [thumbnail, setThumbnail] = useState('');[]
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
      .then(() => fetchOutfitList());
  };

  return Object.keys(cardProduct).length > 0 && (
    <div className="outfit-card">

      <i
        className="fa fa-times-circle delete-style"
        onClick={deleteOutfit}
      ></i>
      <img src={thumbnail} className="outfit-thumbnail-style" />
      <p>{cardProduct.category}</p>
      <h4>{cardProduct.name}</h4>
      {!currentStyle.sale_price
        ? <p>$ {currentStyle.original_price}</p>
        : (
          <div>
            <strike style={{ color: "red" }}>$ {currentStyle.original_price}</strike>
            <p>$ {currentStyle.sale_price}</p>
          </div>
        )}
      <StarRating rating={Number(avgRatings)} />

    </div>
  );
};

OutfitCard.propTypes = {
  productId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  fetchOutfitList: PropTypes.object.isRequired
};

export default OutfitCard;
