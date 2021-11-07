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
  const [salePrice, setSalePrice] = useState(null);
  const { reviewMeta: { avgRatings } } = reviewContext;
  const [thumbnail, setThumbnail] = useState('');
  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    fetch(`${API_URL}/${productId}`)
      .then(response => response.json())
      .then(obj => setCardProduct(obj));
    // get thumbnail_url photo
    fetch(`${API_URL}/${productId}/styles`)
      .then(response => response.json())
      .then(data => {
        setThumbnail(data.results[0].photos[0].thumbnail_url);
        setSalePrice(data.results[0].sale_price)
      });
  }, []);

  const handleClick = (e) => {
    // console.log(e.currentTarget.dataset.divId);
    const clickedProductId = e.currentTarget.getAttribute('data-divId');
    productContext.getProductInfo(clickedProductId)
    productContext.getProductStyles(clickedProductId)
  }

  const deleteOutfit = () => {
    fetch(`http://localhost:3000/outfit/${username}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productId })
    })
    fetchOutfitList();
  };

  return Object.keys(cardProduct).length > 0 && (
    <div className="outfit-card" data-divId={cardProduct.id} onClick={handleClick}>

      <i
        className="fa fa-times-circle delete-style"
        onClick={deleteOutfit}
      ></i>
      <img src={thumbnail} className="outfit-thumbnail-style" />
      <p>{cardProduct.category}</p>
      <h4>{cardProduct.name}</h4>
      {!salePrice ? <p>$ {cardProduct.default_price}</p> : <div> <strike style={{ color: "red" }}>$ {cardProduct.default_price}</strike><p>$ {salePrice}</p></div>}
      <StarRating rating={Number(avgRatings)} />

    </div>
  );
};

OutfitCard.propTypes = {
  productId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  fetchOutfitList: PropTypes.object.isRequired,

};

export default OutfitCard;