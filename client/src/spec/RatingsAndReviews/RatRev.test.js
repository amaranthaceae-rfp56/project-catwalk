import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import ReviewContext from '../../context/reviews/ReviewContext.js';
import RatingsAndReviews from '../../components/RatingsAndReviews/RatingsAndReviews.jsx';

afterEach( ()=> {
  cleanup();
});
describe.only('render component',() => {
  test('test', () => {
    const mockData = {
      reviews: {
        results: [
          {
            body: "this is the body. this is the body. this is the body.this is the body. this is the body. this is the body. this is the body.",
            date: "2021-11-11T00:00:00.000Z",
            reviewer_name: 'Chris',
            rating: 5,
            review_id: 1094735,
            summary: 'Summary of review',
            recommend: true,
            response: null,
            helpfulness: 5,
            photos: [],
            score: 27.5,
          }
        ]
      },
      reviewMeta: {
        product_id: '40344',
        ratings: {
          '1': '13',
          '2': '12',
          '3': '32',
          '4': '38',
          '5': '116'
        },
        recommended: {'fasle': '57', 'true': "154"},
        characteristics: {
          Comfort: {id: 135221, value: '3.0175438596491228'},
          Fit: {id: 135219,  value: '2.6206896551724138'},
          Length: {id: 135220,  value: '2.6379310344827586'},
          Quality: {id: 135222,  value: '3.1898734177215190'},
        },
        avgRatings: 4,
        averageReviewCount: 211
      }
    }
    const { container } = render(<ReviewContext.Provider value = {mockData}><RatingsAndReviews/></ReviewContext.Provider>);

    console.log(container);
    global.expect(container.querySelector('.ratings-reviews-container')).toBeInTheDocument();
    global.expect(container.querySelector('.ratings-reviews-container')).toHaveTextContent('Reviews');

    global.expect(container.querySelector('.ratings-data-container')).toBeInTheDocument();
    global.expect(container.querySelector('.reviews-container')).toBeInTheDocument();
  });
});


// test('snapshots', () => {
//   const tree = renderer.create(<RatingsAndReviews/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });