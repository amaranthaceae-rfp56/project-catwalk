import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/sections/_questions.scss';

const AnswerForm = (props) => (
  <div className="form-container">
    <div className="form-child-container">
      <div className="form-title-text">Submit Your Answer</div>
      <div className="form-subtitle-text">{`${props.productName}: ${props.questionBody}`}</div>
    </div>
    <Formik
      initialValues={{ nickname: '', email: '', answer: '' }}
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
        // Answer validation
        if (!values.answer) {
          errors.answer = 'You must enter the following: Required field is blank';
        } else if (values.answer.length > 1000) {
          'Cannot exceed 1000 characters';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <div className="form-child-container">
            <div className="form-label-text">What is your nickname *</div>
            <Field className="form-input-container form-input-text" type="text" name="nickname" placeholder="Example: jack543!" />
            <div className="form-footnote-text">For privacy reasons, do not use your full name or email address</div>
            <ErrorMessage className="form-error-text" name="nickname" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Your email *</div>
            <Field className="form-input-container  form-input-text" type="email" name="email" placeholder="jack@email.com" />
            <div className="form-footnote-text">For authentication reasons, you will not be emailed</div>
            <ErrorMessage className="form-error-text" name="email" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Your Answer *</div>
            <Field className="form-large-input-container form-input-text" as="textarea" name="answer" placeholder="1000 characters max..." />
            <ErrorMessage className="form-error-text" name="answer" component="div" />
          </div>
          <button className="theme-button" type="button" >
            Upload photos
          </button>
          <button className="theme-button" type="submit" disabled={isSubmitting}>
            Submit answer
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

AnswerForm.propTypes = {
  productName: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired
}

export default AnswerForm;