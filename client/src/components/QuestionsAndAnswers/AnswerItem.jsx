import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles/sections/_questions.scss';

const AnswerItem = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.answer.helpfulness);

  const addHelpfulCount = () => {

    const options = {
      url: `http://localhost:3000/api/qa/answers/:answer_id/helpful/`,
      method: 'PUT',
      params: {
        answer_id: props.answer.id
      }
    };

    axios(options)
      .then(() => {
        console.log('user found answer helpful!', props.answer.id);
        setHelpfulCount(helpfulCount + 1);
      })
      .catch(err => {
        console.log(err);
      });
  };


  let foundHelpful = (<div className="found-helpful-font" onClick={addHelpfulCount} >Yes</div>);

  let doReport = (<div className="found-helpful-font" onClick={() => {alert('This answer was offensive')}} >Report</div>);

  let dateAnswered = new Date(props.answer.date).toLocaleDateString(undefined,{month: 'long', day: 'numeric', year: 'numeric'});



  return (
    <div>
    <div className="questions-container">
      <div className="answers-font">{props.answer.body}</div>
    </div>
    <div className="questions-container answers-info-font">
      <div className="answer-footnote-container">{`by ${props.answer.answerer_name}`}</div>
      <div className="answer-footnote-container">{dateAnswered}</div>
      <div className="answer-footnote-container">
        <div>{`Helpful?  `}</div>
        <div>{foundHelpful}</div>
        {`  (${helpfulCount})`}
      </div>
      <div className="answer-footnote-container">
        <div>{doReport}</div>
      </div>
    </div>
    </div>
  )
};

AnswerItem.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default AnswerItem;