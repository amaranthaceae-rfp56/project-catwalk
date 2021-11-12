import {render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {jest} from '@jest/globals'
import '@testing-library/jest-dom/extend-expect';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import QuestionState from '../../context/questions/QuestionState.js';
import ProductState from '../../context/products/ProductState.js';
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import QuestionList from '../../components/QuestionsAndAnswers/QuestionList.jsx';
import ProductContext from '../../context/products/ProductContext';
import QuestionContext from '../../context/questions/QuestionContext';


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

  global.test('Screen test: Should detect the section title " QUESTIONS & ANSWERS"', async () => {

    await ReactDOM.render(< ProductContext.Provider > < QuestionContext.Provider > < QuestionsAndAnswers /> </ QuestionContext.Provider > </ ProductContext.Provider >, container);

    let result = container.querySelector('#test-questions-and-answers');

    global.expect.assertions(3);

    try {
      global.expect(result).toBeInTheDocument();
      global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
      global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);
    } catch (err) {
      global.expect(err).toEqual(new Error());
      //done.fail(err);
    }

  });

  global.test('Should detect the section title " QUESTIONS & ANSWERS"', async () => {

    await ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);

    const result = container.querySelector('#test-questions-and-answers');

    global.expect.assertions(3);
    try {
      global.expect(result).toBeInTheDocument();
      global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
      global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);
    } catch (err) {
      global.expect(err).toEqual(new Error());
      //done.fail(err);
    }

  });

});

// global.describe('QUESTIONS LIST', () => {

//   global.test('Add a Question Button should exist"', async () => {
//       await ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);

//       const button = container.querySelector('button');

//       global.expect.assertions(1);
//       try {
//         await global.expect(button).toHaveTextContent(`ADD A QUESTION +`);
//         //global.expect(button).toHaveBeenCalledTimes(1)
//       } catch (err) {
//         global.expect(err).toEqual(new Error());
//       }

//   });

//   global.test('Add a Question Button should open Question Form component when clicked"', async () => {
//     //await act(() => {
//       await ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//       const button = container.querySelector('button');
//       let before = container.querySelector('.form-title-text');
//       let after = before;

//       act(() => {
//         fireEvent.click(button);
//       });

//       after = container.querySelector('.form-title-text');

//       global.expect.assertions(3);
//       try {
//         await global.expect(before).toBe(null);
//         await global.expect(button).toHaveTextContent(`ADD A QUESTION +`);
//         await global.expect(after).toHaveTextContent(`Ask Your Question`);
//       } catch (err) {
//         global.expect(err).toEqual(new Error());
//       }

//   });



// });

// global.describe.skip('QUESTIONS ITEM', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('ANSWER LIST', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('ANSWER ITEM', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('QUESTION FORM', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('ANSWER FORM', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('ANSWER IMAGE FORM', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });

// global.describe.skip('QUESTION SEARCH', () => {

//   global.test('Should detect the section title " QUESTIONS & ANSWERS"', () => {
//     //await act(() => {
//       ReactDOM.render(< ProductState > < QuestionState > < QuestionsAndAnswers /> </ QuestionState > </ ProductState >, container);
//   //  });

//     const result = container.querySelector('#test-questions-and-answers');

//     global.expect(result).toBeInTheDocument();
//     global.expect(screen.getByText(`QUESTIONS & ANSWERS`)).toBeInTheDocument();
//     global.expect(result).toHaveTextContent(`QUESTIONS & ANSWERS`);

//   });
// });





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

