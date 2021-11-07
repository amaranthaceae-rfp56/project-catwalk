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


  return (
    <div>
      {questionAnswers.filter((answer, index) => index < visibleAnswers)
        .map((answer) => (
        < AnswerItem key={answer.id} answer={answer} questionId={props.questionId} />
      ))}
      <div>{moreAnswers}</div>
    </div>
  )
};

AnswerList.propTypes = {
  questionAnswers: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default AnswerList;