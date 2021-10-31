import React, { useEffect, useContext } from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

// Context State
import ProductState from '../context/products/ProductState.js';
import ReviewState from '../context/reviews/ReviewState.js';
import QuestionState from '../context/questions/QuestionState.js';
import CartState from '../context/cart/CartState.js';

// Context
import ProductContext from '../context/products/ProductContext';
import ReviewContext from '../context/reviews/ReviewContext';
import QuestionContext from '../context/questions/QuestionContext';
import CartContext from '../context/cart/CartContext';

const App = () => {
  const productContext = useContext(ProductContext);
  const reviewContext = useContext(ReviewContext);
  const questionContext = useContext(QuestionContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
  //  productContext.getProducts();
  }, []);

    return (
      <ProductState>
        <ReviewState>
          <QuestionState>
            <CartState>
              <ProductOverview/>
              <RelatedItems/>
              <QuestionsAndAnswers/>
              <RatingsAndReviews/>
            </CartState>
          </QuestionState>
        </ReviewState>
      </ProductState>
    )
}

export default App;