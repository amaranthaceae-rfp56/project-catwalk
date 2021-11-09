import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import ReviewState from '../../context/reviews/ReviewState.js';
import RatingsAndReviews from '../../components/RatingsAndReviews/RatingsAndReviews.jsx';

afterEach( ()=> {
  cleanup();
});
describe.only('render component',() => {
  test('test', () => {

    const { container } = render(<ReviewState><RatingsAndReviews/></ReviewState>);

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