import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import QuestionContext from '../../context/questions/QuestionContext';
import AnswerList from './AnswerList.jsx';

import '../../styles/sections/_questions.scss';

const QuestionList = () => {

  const questionContext = useContext(QuestionContext);
  const data = questionContext.questions.results
  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(2);
  let moreQuestions;

  const loadMoreQuestions = () => {
    if (visibleQuestions + 2 <= questions.length) {
      setVisibleQuestions(visibleQuestions + 2);
    } else {
      setVisibleQuestions(questions.length);
    }
  };

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  if (questions.length > visibleQuestions) {
    moreQuestions = (<button className="review-button" onClick = {loadMoreQuestions} >MORE ANSWERED QUESTIONS</button>);
  }

  return (
    <div>
      <div className='questions-scrollable-container'>
        {questions.filter((question, index) => index < visibleQuestions)
          .map((question) => (
            < QuestionItem key={question.question_id} questionBody={question.question_body} questionAnswers={question.answers} questionHelpfulness={question.question_helpfulness} />
          ))}
      </div>
      <div>{moreQuestions}</div>
    </div>
  );
};


const QuestionItem = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.questionHelpfulness);

  const addHelpfulCount = () => {
    setHelpfulCount(helpfulCount + 1);
  };

  let foundHelpful = (<div className="found-helpful-font" onClick={addHelpfulCount}>Yes</div>);

  let doAnswer = (<div className="found-helpful-font" onClick={() => {alert('This feature will be available soon!')}} >Add Answer</div>);

  return (
    <div>
    <div className="questions-container">
      <div className="questions-q-container questions-font">Q:</div>
      <div className="questions-question-container questions-font">
        {props.questionBody}
      </div>
      <div className="questions-helpful-container answers-info-font">
      <div>{`Helpful?  `}</div>
        <div>{foundHelpful}</div>
        {`  (${helpfulCount})`}
      </div>
      <div className="questions-addAnswer-container answers-info-font">
        <div>{doAnswer}</div>
      </div>
    </div>
    <div className="questions-container">
      <div className="questions-q-container">
        <div className="questions-font">A:</div>
      </div>
        <div className="answers-scrollable-container">
          < AnswerList questionAnswers={props.questionAnswers} />
      </div>
    </div>
    </div>
  )
};

QuestionItem.propTypes = {
  question_helpfulness: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionAnswers: PropTypes.object.isRequired,
};

export default QuestionList;