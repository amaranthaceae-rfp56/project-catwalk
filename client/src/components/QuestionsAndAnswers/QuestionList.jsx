import React, {useState, useEffect, useContext} from 'react';
import QuestionContext from '../../context/questions/QuestionContext';
import AnswerList from './AnswerList.jsx';

import '../../styles/sections/_questions.scss';

const QuestionList = () => {

  const questionContext = useContext(QuestionContext);
  const data = questionContext.questions.results
  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(2);
  let moreQuestions;

  const loadMoreQuestions = () => {
    if (visibleQuestions + 2 <= questions.length) {
      setVisibleQuestions(visibleQuestions + 2);
    } else {
      setVisibleQuestions(questions.length);
    }
  };

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  if (questions.length > visibleQuestions) {
    moreQuestions = (<button className="review-button" onClick = {loadMoreQuestions} >MORE ANSWERED QUESTIONS</button>);
  }

  return (
    <div>
      <div className='questions-scrollable-container'>
        {questions.filter((question, index) => index < visibleQuestions)
          .map((question) => (
            < QuestionItem key={question.question_id} questionBody={question.question_body} questionAnswers={question.answers}/>
          ))}
      </div>
      <div>{moreQuestions}</div>
    </div>
  );
};

const QuestionItem = (props) => {
  return (
    <div>
    <div className="questions-container">
      <div className="questions-idContainer">
        <div className="questions-title">Q:</div>
      </div>
        <div className="questions-bodyContainer">
          <div className="questions-title">{props.questionBody}</div>
        </div>
    </div>
    <div className="questions-container">
      <div className="questions-idContainer">
        <div className="questions-title">A:</div>
      </div>
        <div className="questions-bodyContainer">
          < AnswerList questionAnswers={props.questionAnswers} />
      </div>
    </div>
    </div>
  )
};

export default QuestionList;