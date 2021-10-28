import React from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import ProductState from '../context/products/ProductState.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductState>
        <ProductOverview/>
        <RelatedItems/>
        <QuestionsAndAnswers/>
        <RatingsAndReviews/>
      </ProductState>
    )
  }
}

export default App;