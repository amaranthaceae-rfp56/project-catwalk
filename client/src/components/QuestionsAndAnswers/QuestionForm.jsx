import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/sections/_questions.scss';

const QuestionForm = (props) => (
  <div className="form-container">
    <div className="form-child-container">
      <div className="form-title-text">Ask Your Question</div>
      <div className="form-subtitle-text">About the {props.product.name}</div>
    </div>
    <Formik
      initialValues={{ nickname: '', email: '', question: '' }}
      validate={values => {
        const errors = {};
        // Nickname validation
        if (!values.nickname) {
          errors.nickname = 'You must enter the following: Required field is blank';
        } else if (values.nickname.length > 60) {
          errors.nickname = 'Cannot exceed 60 characters';
        }
        // Email validation
        if (!values.email) {
          errors.email = 'You must enter the following: Required field is blank';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'You must enter the following: The email address provided is not in correct email format';
        }
        // Question validation
        if (!values.question) {
          errors.question = 'You must enter the following: Required field is blank';
        } else if (values.question.length > 1000) {
          'Cannot exceed 1000 characters';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {

        const options = {
          url: `/api/qa/questions`,
          method: 'POST',
          data: {
            name: values.nickname,
            email: values.email,
            body: values.question,
            product_id: props.product.id
          }
        };

        axios(options)
          .then(() => {
            setTimeout(() => {
            props.callback(false);
            alert('Your question has been submitted!');
            let id = 500000 + Math.floor(Math.random() * 9000);
            props.updateQuestionSet(
              id, {
              question_body: values.question,
              question_date: Date.now(),
              asker_name: values.nickname,
              questions_helpfulness: 0,
              reported: false,
              answers: {},
            });
            setSubmitting(false);
            }, 400);
          })
          .catch(err => {
          console.log(err);
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <div className="form-child-container">
            <div className="form-label-text">What is your nickname *</div>
            <Field className="form-input-container form-input-text" type="text" name="nickname" placeholder="Example: jackson11" />
            <div className="form-footnote-text">For privacy reasons, do not use your full name or email address</div>
            <ErrorMessage className="form-error-text" name="nickname" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Your email *</div>
            <Field className="form-input-container  form-input-text" type="email" name="email" placeholder="Why did you like the product or not?" />
            <div className="form-footnote-text">For authentication reasons, you will not be emailed</div>
            <ErrorMessage className="form-error-text" name="email" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Your Question *</div>
            <Field className="form-large-input-container form-input-text" as="textarea" name="question" placeholder="1000 characters max..." />
            <ErrorMessage className="form-error-text" name="question" component="div" />
          </div>
          <button className="theme-button" type="submit" disabled={isSubmitting}>
            Submit question
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

QuestionForm.propTypes = {
  product: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
  updateQuestionSet: PropTypes.func.isRequired
}

export default QuestionForm;