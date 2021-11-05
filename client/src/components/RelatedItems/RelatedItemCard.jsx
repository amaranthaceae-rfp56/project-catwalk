import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_related.scss';
import ReviewContext from '../../context/reviews/ReviewContext';
import ProductContext from '../../context/products/ProductContext';
import StarRating from '../sharedComponents/StarRating.jsx';
import CompareModal from './CompareModal.jsx';
import Modal from '../../components/sharedComponents/Modal.jsx';


const RelatedItemCard = ({ pageProduct, cardProductId }) => {
  const productContext = useContext(ProductContext);
  const [cardProduct, setCardProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [thumbnail, setThumbnail] = useState('');
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings } } = reviewContext;
  const { currentStyle } = productContext;
  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    fetch(`${API_URL}/${cardProductId}`)
      .then(response => response.json())
      .then(obj => setCardProduct(obj));
    // get thumbnail_url photo
    fetch(`${API_URL}/${cardProductId}/styles`)
      .then(response => response.json())
      .then(data => setThumbnail(data.results[0].photos[0].thumbnail_url));
  }, []);

  const openModal = () => {
    console.log('clicked');
    const compareList = (<CompareModal left={cardProduct} right={pageProduct} />);
    setModal(<Modal callback={setModal} component={compareList} class="related-modal" />)
  };

  return Object.keys(cardProduct).length > 0 && (
    <div className="related-card-container">
      <div className="related-card">
        <i className="fa fa-star compare-style"
          onClick={openModal}
        ></i>
        <img src={thumbnail}
          className="thumbnail-style" />
        <p className="category-style">
          {cardProduct.category}
        </p>
        <p className="releateName-style">
          <b>{cardProduct.name}</b>
        </p>
        {!currentStyle.sale_price ? <p>$ {currentStyle.original_price}</p> : <div> <strike style={{ color: "red" }}>$ {currentStyle.original_price}</strike><p>$ {currentStyle.sale_price}</p></div>}
        <StarRating rating={Number(avgRatings)} />
      </div>
      {modal}
    </div>
  );
};

RelatedItemCard.propTypes = {
  pageProduct: PropTypes.object.isRequired,
  cardProductId: PropTypes.number.isRequired
};

export default RelatedItemCard;
