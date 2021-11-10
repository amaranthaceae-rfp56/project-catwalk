import React from 'react';
import QuestionList from './QuestionList.jsx';
import '../../styles/sections/_questions.scss';

const QuestionsAndAnswers = () => {
  return (
    <div id="questions-main-container" className="questions-main-container">
      <div id="test-questions-and-answers" className="questions-section-container questions-section-title-font">
        {`QUESTIONS & ANSWERS`}
      </div>
      <div id="test-question-list">
        < QuestionList />
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;