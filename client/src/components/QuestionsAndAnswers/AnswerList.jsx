import React, {useState, useEffect} from 'react';
import '../../styles/sections/_questions.scss';

const AnswerList = (props) => {

  let questionAnswers = Object.values(props.questionAnswers);

  const [visibleAnswers, setVisibleAnswers] = useState(2);
  let moreAnswers;


  const loadMoreAnswers = () => {
    if (visibleAnswers + 2 <= questionAnswers.length) {
      setVisibleAnswers(visibleAnswers + 2);
    } else {
      setVisibleAnswers(questionAnswers.length);
    }
  };

  if (questionAnswers.length > visibleAnswers) {
    moreAnswers = (<div className="load-answers" onClick = {loadMoreAnswers} >load more answers</div>);
  }

  return (
    <div>
    <div className="questions-answer">
      {questionAnswers.filter((answer, index) => index < visibleAnswers)
        .map((answer) => (
        < AnswerItem key={answer.id} answer={answer.body} />
      ))}
    </div>
      <div>{moreAnswers}</div>
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