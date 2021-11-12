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
  const [reviewRating, setReviwRating] = useState(0);
  const [thumbnail, setThumbnail] = useState('');
  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    // const currentId = productContext.productInfo.id;
    // console.log('current >>>', currentId);
    // 'cardProductId';
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
    // get ratings for individual card product
    fetch(`http://localhost:3000/api/reviews/meta/${cardProductId}`)
      .then(response => response.json())
      .then(obj => {
        var totalVote = 0;
        var totalScore = 0;
        for (var vote in obj.ratings) {
          totalScore += (Number(vote) * obj.ratings[vote]);
          totalVote += Number(obj.ratings[vote]);
        }
        setReviwRating(totalScore / totalVote);
      });
  }, []);
  // }, [productContext.productInfo.id]);

  const openModal = () => {
    const compareList = (<CompareModal left={cardProduct} right={pageProduct} />);
    setModal(<Modal callback={setModal} component={compareList} class="related-modal" />)
  };

  const handleClick = (e) => {
    const clickedProductId = e.currentTarget.getAttribute('data-divId');
    productContext.getProductInfo(clickedProductId)
    productContext.getProductStyles(clickedProductId)
    questionContext.getQuestions(clickedProductId)
    questionContext.getAnswers(clickedProductId)
  }

  return Object.keys(cardProduct).length > 0 && (
    <div className="related-card-border">

      <i className="fa fa-star compare-style"
        onClick={openModal}
      ></i>
      <div className="related-card"
        data-divId={cardProduct.id} onClick={handleClick}>
        <img src={thumbnail}
          className="thumbnail-style" />
        <p className="category-style">
          {cardProduct.category}
        </p>
        <p className="releateName-style">
          <b>{cardProduct.name}</b>
        </p>
        {!salePrice ? <p>$ {cardProduct.default_price}</p> : <div> <strike style={{ color: "red" }}>$ {cardProduct.default_price}</strike><p>$ {salePrice}</p></div>}
        <div className="star-related">
          <StarRating rating={reviewRating} />
        </div>
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
