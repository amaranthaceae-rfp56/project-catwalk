import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const QuestionItem = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.questionHelpfulness);


  const addHelpfulCount = () => {

    const options = {
      url: `http://localhost:3000/api/qa/questions/:question_id/helpful/`,
      method: 'PUT',
      params: {
        question_id: props.questionId
      }
    };

    axios(options)
      .then(() => {
        console.log('user found question helpful!');
        setHelpfulCount(helpfulCount + 1);
      })
      .catch(err => {
        console.log(err);
      });
  };


  let foundHelpful = (<div className="found-question-helpful-font" onClick={addHelpfulCount}>Yes</div>);

  let doAnswer = (<div className="found-helpful-font" onClick={() => {alert('This feature will be available soon!')}} >Add Answer</div>);

  return (
    <div>
    <div className="questions-container">
      <div className="questions-q-container questions-font">Q:</div>
      <div className="questions-question-container questions-font">
        {props.questionBody}
      </div>
      <div className="questions-helpful-container questions-info-font">
      <div>{`Helpful?  `}</div>
        <div>{foundHelpful}</div>
        {`  (${helpfulCount})`}
      </div>
      <div className="questions-addAnswer-container questions-info-font">
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
  questionId: PropTypes.number.isRequired
};

export default QuestionItem;