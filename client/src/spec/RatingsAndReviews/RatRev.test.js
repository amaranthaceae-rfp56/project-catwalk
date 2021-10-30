import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import RatingsAndReviews from '../../components/RatingsAndReviews/RatingsAndReviews.jsx';

afterEach( ()=> {
  cleanup();
});

test('test', () => {
  render(<RatingsAndReviews/>);
  const review = screen.getByTestId('Ratings-And-Reviews');

  expect(review).toBeInTheDocument();
  expect(review).toHaveTextContent('RATINGS AND REVIEWS');
});

test('snapshots', () => {
  const tree = renderer.create(<RatingsAndReviews/>).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});