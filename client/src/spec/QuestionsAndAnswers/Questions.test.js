import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import QuestionsAndAnswers from '../../components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';

afterEach( ()=> {
  cleanup();
});

test('test', () => {
  render(<QuestionsAndAnswers/>);
  const item = screen.getByTestId('Questions-And-Answers');

  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent('QUESTIONS AND ANSWERS');


});

// test('snapshots', () => {
//   const tree = renderer.create(<QuestionsAndAnswers/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });