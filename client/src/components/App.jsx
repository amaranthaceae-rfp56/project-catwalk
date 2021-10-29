import React, { useEffect, useContext } from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import ProductState from '../context/products/ProductState.js';

import ProductContext from '../context/products/ProductContext';

const App = () => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
  //  productContext.getProducts();
  }, []);

    return (
      <ProductState>
        <ProductOverview/>
        <RelatedItems/>
        <QuestionsAndAnswers/>
        <RatingsAndReviews/>
      </ProductState>
    )
}

export default App;