import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import QuestionsAndAnswers from '../../components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import QuestionList from '../../components/QuestionsAndAnswers/QuestionsList.jsx';

global.afterEach( ()=> {
  cleanup();
});

// global.test('should filter an array of strings and only output items that fit the criteria', () => {
//   render(<QuestionList/>);


//   var result = QuestionList.handleSearch('car')

//   QuestionList.visibleQuestions = ['cards, letters, numbers, discard, faulty'];

//   global.expect(result).toEqual(['cards', 'discard']);

// });

global.test('tasdfkja;sldfjasdfljasd;lf', () => {
  render (<QuestionList />);
  const searchBar = screen.getByTestId("questionSearch");

  global.expect(searchBar).toBeInTheDocument();
});



// global.test('test', () => {
//   render(<QuestionsAndAnswers/>);
//   const item = screen.getByTestId('Questions-And-Answers');

//   global.expect(item).toBeInTheDocument();
//   global.expect(item).toHaveTextContent('QUESTIONS AND ANSWERS');


// });

// test('snapshots', () => {
//   const tree = renderer.create(<QuestionsAndAnswers/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// });