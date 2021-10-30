import React, { useEffect, useContext } from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

// Context State
import ProductState from '../context/products/ProductState.js';
import ReviewState from '../context/reviews/ReviewState.js';

// Context
import ProductContext from '../context/products/ProductContext';
import ReviewContext from '../context/reviews/ReviewContext';

const App = () => {
  const productContext = useContext(ProductContext);
  const reviewContext = useContext(ReviewContext);

  useEffect(() => {
  //  productContext.getProducts();
  }, []);

    return (
      <ProductState>
        <ReviewState>
          <ProductOverview/>
          <RelatedItems/>
          <QuestionsAndAnswers/>
          <RatingsAndReviews/>
        </ReviewState>
      </ProductState>
    )
}

export default App;