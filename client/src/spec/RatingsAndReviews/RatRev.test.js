import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import ReviewState from '../../context/reviews/ReviewState.js';
import RatingsAndReviews from '../../components/RatingsAndReviews/RatingsAndReviews.jsx';

afterEach( ()=> {
  cleanup();
});

test('test', async () => {
  render(<ReviewState><RatingsAndReviews/></ReviewState>);
  const review = screen.getByTestId('Ratings-And-Reviews');

  global.expect(review).toBeInTheDocument();

});

// test('snapshots', () => {
//   const tree = renderer.create(<RatingsAndReviews/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });