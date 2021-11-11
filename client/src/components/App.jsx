import React, { useEffect, useContext, lazy, Suspense } from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItemsSection from './RelatedItems/RelatedItemsSection.jsx';
import OutfitSection from './RelatedItems/OutfitSection.jsx';

// Context State
import ProductState from '../context/products/ProductState.js';
import ReviewState from '../context/reviews/ReviewState.js';
import QuestionState from '../context/questions/QuestionState.js';
import CartState from '../context/cart/CartState.js';
import ClickTrackerState from '../context/clickTracker/ClickTrackerState.js';

// Context
import ClickTrackerContext from '../context/clickTracker/ClickTrackerContext';

const ProductOverviewComponent = lazy(() => import('./ProductOverview/ProductOverview.jsx'));
const RelatedItemsSectionComponent = lazy(() => import('./RelatedItems/RelatedItemsSection.jsx'));
const OutfitSectionComponent = lazy(() => import('./RelatedItems/OutfitSection.jsx'));
const QuestionsAndAnswersComponent = lazy(() => import('./QuestionsAndAnswers/QuestionsAndAnswers.jsx'));
const RatingsAndReviewsComponent = lazy(() => import('./RatingsAndReviews/RatingsAndReviews.jsx'));

const App = () => {
  const clickTrackerContext = useContext(ClickTrackerContext);


  const handleClick = (e) => {
    if (e.target.className !== "") {
      clickTrackerContext.getTrackedClick(e.target.tagName, e.target.className, e.timeStamp)
    }
  }

  return (
    <ProductState>
      <ReviewState>
        <QuestionState>
          <CartState>
            <ClickTrackerState>
              <div onClick={handleClick}>
              <Suspense fallback={<p>Loading...</p>}>
                  <ProductOverviewComponent />
                  {/* <ProductOverview /> */}
                  <RelatedItemsSectionComponent />
                  {/* <RelatedItemsSection /> */}
                  <OutfitSectionComponent />
                  {/* <OutfitSection /> */}
                  <QuestionsAndAnswersComponent />
                  {/* <QuestionsAndAnswers /> */}
                  <RatingsAndReviewsComponent />
                </Suspense>
                {/* <RatingsAndReviews /> */}
              </div>
            </ClickTrackerState>
          </CartState>
        </QuestionState>
      </ReviewState>
    </ProductState>
  )
}

export default App;