import React, {useState, useEffect, useContext} from 'react';
import QuestionContext from '../../context/questions/QuestionContext';
import QuestionItem from './QuestionItem.jsx';
import QuestionSearch from './QuestionSearch.jsx';

import '../../styles/sections/_questions.scss';

const QuestionList = () => {

  const questionContext = useContext(QuestionContext);
  const data = questionContext.questions.results;
  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');
  let moreQuestions;

  const loadMoreQuestions = () => {
    if (visibleQuestions + 2 <= questions.length) {
      setVisibleQuestions(visibleQuestions + 2);
    } else {
      setVisibleQuestions(questions.length);
    }
  };

  const handleSearch = (userInput) => {
    if (userInput.length > 2) {
      setSearchTerm(userInput);
      setVisibleQuestions(questions.length);
    } else {
      setSearchTerm('');
      setVisibleQuestions(2);
    }
  };

  useEffect(() => {
    if (data) {
      data.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      });
      setQuestions(data);
    }
  }, [data]);

  if (questions.length > visibleQuestions) {
    moreQuestions = (<button className="review-button" onClick = {loadMoreQuestions} >MORE ANSWERED QUESTIONS</button>);
  }

  return (

    <div>
      <div>
        <QuestionSearch handleSearch={handleSearch} />
      </div>
      <div className='questions-scrollable-container'>
        {questions
          .filter((question) => {
            let inQuestion = question.question_body.toLowerCase()
            .includes(searchTerm.toLowerCase())
            if (inQuestion) {
              return true;
            }

            for (let answer in question.answers) {
              console.log(answer);
              console.log(question.answers);
              let inAnswer = question.answers[answer].body.toLowerCase()
                .includes(searchTerm.toLowerCase())
                if (inAnswer) {
                  return true;
                }
            }
          })
          .filter((question, index) => index < visibleQuestions)
          .map((question) => (
            < QuestionItem key={question.question_id} questionBody={question.question_body} questionAnswers={question.answers} questionHelpfulness={question.question_helpfulness} />
          ))}
      </div>
      <div>{moreQuestions}</div>
    </div>
  );
};




export default QuestionList;