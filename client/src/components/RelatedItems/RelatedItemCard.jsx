import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_related.scss';
import ReviewContext from '../../context/reviews/ReviewContext';
import ProductContext from '../../context/products/ProductContext';
import QuestionContext from '../../context/questions/QuestionContext';
import StarRating from '../sharedComponents/StarRating.jsx';
import CompareModal from './CompareModal.jsx';
import Modal from '../../components/sharedComponents/Modal.jsx';


const RelatedItemCard = ({ pageProduct, cardProductId }) => {
  const productContext = useContext(ProductContext);
  const questionContext = useContext(QuestionContext);
  const [cardProduct, setCardProduct] = useState({});
  const [salePrice, setSalePrice] = useState(null);
  const [modal, setModal] = useState(false);
  const [thumbnail, setThumbnail] = useState('');
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings } } = reviewContext;
  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    fetch(`${API_URL}/${cardProductId}`)
      .then(response => response.json())
      .then(obj => setCardProduct(obj));
    // get thumbnail_url photo
    fetch(`${API_URL}/${cardProductId}/styles`)
      .then(response => response.json())
      .then(data => {
        setThumbnail(data.results[0].photos[0].thumbnail_url);
        setSalePrice(data.results[0].sale_price)
      });
  }, []);

  const openModal = () => {

    const compareList = (<CompareModal left={cardProduct} right={pageProduct} />);
    setModal(<Modal callback={setModal} component={compareList} class="related-modal" />)
  };

  const handleClick = (e) => {

    const clickedProductId = e.currentTarget.getAttribute('data-divId');
    productContext.getProductInfo(clickedProductId)
    productContext.getProductStyles(clickedProductId)
<<<<<<< HEAD

=======
    questionContext.getQuestions(clickedProductId)
    questionContext.getAnswers(clickedProductId)
>>>>>>> a68f16a1bf3df0fe75156d0001f2bde83e328d57
  }

  return Object.keys(cardProduct).length > 0 && (
    <div className="related-card-container" data-divId={cardProduct.id} onClick={handleClick} >
      <div className="related-card" >
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
        {!salePrice ? <p>$ {cardProduct.default_price}</p> : <div> <strike style={{ color: "red" }}>$ {cardProduct.default_price}</strike><p>$ {salePrice}</p></div>}
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
