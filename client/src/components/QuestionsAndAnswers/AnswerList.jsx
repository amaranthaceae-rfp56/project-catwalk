import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_questions.scss';

import AnswerItem from './AnswerItem.jsx';

const AnswerList = (props) => {

  let questionAnswers = Object.values(props.questionAnswers);

  questionAnswers.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });

  const [visibleAnswers, setVisibleAnswers] = useState(2);
  const [moreAnswersBtnLabel, setMoreAnswersBtnLabel] = useState('load more answers');


  const loadMoreAnswers = () => {
    if (visibleAnswers === questionAnswers.length) {
      setVisibleAnswers(2);
      setMoreAnswersBtnLabel('load more answers')
    } else {
      setVisibleAnswers(questionAnswers.length);
      setMoreAnswersBtnLabel('collapase answers');
    }
  };

  let moreAnswers = (<div className="load-answers-font" onClick={loadMoreAnswers} >{moreAnswersBtnLabel}</div>);

  let anotherLabel = () => {
    if (questionAnswers.length === 0) {
      return  <div className="noAnswers-label-font">This question has not been answered yet</div>
    } else {
      return <div className="noMoreAnswers-label-font"></div>
    }
  }


  return (
<div>
      <div className="answers-scrollable-container">
        {questionAnswers.filter((answer, index) => index < visibleAnswers)
          .map((answer) => (
          < AnswerItem key={answer.id} answer={answer} questionId={props.questionId} />
        ))}
      </div>
      <div className="questions-loadAnswers-container">
        {questionAnswers.length > 2 ? <div>{moreAnswers}</div> : anotherLabel() }
      </div>
</div>


  )
};

AnswerList.propTypes = {
  questionAnswers: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default AnswerList;