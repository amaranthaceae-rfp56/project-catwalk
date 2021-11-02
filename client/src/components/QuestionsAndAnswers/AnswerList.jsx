import React from 'react';
import '../../styles/sections/_questions.scss';

const AnswerList = (props) => {

  let questionAnswers = Object.values(props.questionAnswers);

  return (

    <div className="questions-answer">
      {questionAnswers.map((answer) => (
        < AnswerItem key={answer.id} answer={answer.body} />
      ))}
    </div>
  )
};

const AnswerItem = (props) => {

  return (
    <div className="questions-answer">{props.answer}</div>
  )
};

export default AnswerList;

// {questions.map((question) => (
//   < QuestionItem key={question.question_id} questionBody={question.question_body} questionAnswers={question.answers}/>
//  ))}