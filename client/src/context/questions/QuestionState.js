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
    answers: {},
  }

  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  useEffect(() => {
    getQuestions();
  }, [])

  const getQuestions = async() => {
    const res = await Axios.get(`${API_URL}/43044`);

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    })
  }

  return (
    <QuestionContext.Provider value={{ questions: state.questions, answers: state.answers, getQuestions }}>
        {props.children}
    </QuestionContext.Provider>
  )
}

export default QuestionState;