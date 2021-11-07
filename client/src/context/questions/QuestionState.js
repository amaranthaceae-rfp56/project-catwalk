import React, { useState, useEffect, useReducer } from 'react';
import QuestionContext from './QuestionContext.js';
import QuestionReducer from './QuestionReducer.js';
import Axios from 'axios';

const API_URL = 'http://localhost:3000/api/qa/questions';

import {
  GET_QUESTIONS,
  GET_ANSWERS,
  ADD_QUESTION,
  ADD_ANSWER,
  MARK_QUESTION,
  REPORT_QUESTION,
  MARK_ANSWER,
  REPORT_ANSWER
} from '../types'

const QuestionState = props => {
  const initialState = {
    questions: [],
    answers: [],
  }

  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  useEffect(() => {
    getQuestions('40348');
    getAnswers('329036');
  }, [])

  const getQuestions = async(id) => {
    const res = await Axios.get(`${API_URL}/${id}`);
    //43044

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    })
  }

  const getAnswers = async (id) => {
    const res = await Axios.get(`http://localhost:3000/api/qa/questions/${id}/answers`);
    console.log(res)
    //43044
    dispatch({
      type: GET_ANSWERS,
      payload: res.data
    })
  }


  return (
    <QuestionContext.Provider value={{ questions: state.questions, answers: state.answers, getQuestions, getAnswers }}>
        {props.children}
    </QuestionContext.Provider>
  )
}

export default QuestionState;