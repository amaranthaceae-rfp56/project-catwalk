import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_questions.scss';

const AnswerItem = (props) => {

  console.log(props);

  let dateAnswered = new Date(props.answer.date).toLocaleDateString(undefined,{month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <div>
    <div className="questions-container">
      <div className="answers-font">{props.answer.body}</div>
    </div>
    <div className="questions-container answers-info-font">
      <div className="answer-footnote-container">{`by ${props.answer.answerer_name}`}</div>
      <div className="answer-footnote-container">{dateAnswered}</div>
      <div className="answer-footnote-container">{`Helpful? Yes (${props.answer.helpfulness})`}</div>
      <div className="answer-footnote-container">Report</div>
    </div>
    </div>
  )
};

AnswerItem.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default AnswerItem;