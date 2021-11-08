import React from 'react';
import QuestionList from './QuestionList.jsx';
import '../../styles/sections/_questions.scss';

const QuestionsAndAnswers = () => {
  return (
    <div className="questions-main-container">
      <div id="questions-section-container" className="questions-section-container questions-section-title-font">
        {`QUESTIONS & ANSWERS`}
      </div>
      <div>
        < QuestionList />
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;