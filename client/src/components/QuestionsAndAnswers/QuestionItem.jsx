import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList.jsx';

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
  questionHelpfulness: PropTypes.number.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionAnswers: PropTypes.object.isRequired,
};

export default QuestionItem;