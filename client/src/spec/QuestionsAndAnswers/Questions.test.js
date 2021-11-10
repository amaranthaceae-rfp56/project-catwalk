import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import QuestionState from '../../context/questions/QuestionState.js';
import ProductState from '../../context/products/ProductState.js';
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import QuestionList from '../../components/QuestionsAndAnswers/QuestionList.jsx';

let container;

global.beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

global.afterEach( ()=> {
  document.body.removeChild(container);
  container = null;
  //cleanup();
});

global.describe('QUESTIONS AND ANSWERS', () => {

  global.test('Should detect the section title " QUESTIONS & ANSWERS"', async () => {
    act(() => {
      ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
    });

    //const result = await container.querySelector('#test-questions-and-answers');

    //await global.expect(result).toBeInTheDocument();
    global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
    //await global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

  });
});





/* // </QuestionState>global.test('should filter an array of strings and only output items that fit the criteria', () => { */
//   render(<QuestionList/>)


//   var result = QuestionList.handleSearch('car')

//   QuestionList.visibleQuestions = ['cards, letters, numbers, discard, faulty'];

//   global.expect(result).toEqual(['cards', 'discard']);

// });

// global.test('tasdfkja;sldfjasdfljasd;lf', () =>
//   render (<QuestionList />);
//   const searchBar = screen.getByTestId("questionSearch");

//   global.expect(searchBar).toBeInTheDocument();
// });



// });

// test('snapshots', () => {
//   const tree = renderer.create(<QuestionsAndAnswers/>).toJSON();
//   console.log(tree);
//   expect(tree).toMatchSnapshot();
// })

