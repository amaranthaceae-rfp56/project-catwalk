import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/sections/_questions.scss';

const AnswerImgForm = (props) => {

  return (

  <div className="form-container">
    <div className="form-child-container">
      <div className="form-title-text">Upload your photos</div>
      <div className="form-subtitle-text">{`${props.productName}: ${props.questionBody}`}</div>
    </div>
    <Formik
      initialValues={{ photo1: '', photo2: '', photo3: '', photo4: '', photo5: ''}}
      validate={values => {
        const errors = {};

        if (values.photo1.length > 60) {
          errors.photo1 = 'Cannot exceed 60 characters';
        }

        if (values.photo2.length > 60) {
          errors.photo2 = 'Cannot exceed 60 characters';
        }

        if (values.photo3.length > 60) {
          errors.photo3 = 'Cannot exceed 60 characters';
        }

        if (values.photo4.length > 60) {
          errors.photo4 = 'Cannot exceed 60 characters';
        }

        if (values.photo5.length > 60) {
          errors.photo5 = 'Cannot exceed 60 characters';
        }
      }}

      onSubmit={(values, { setSubmitting }) => {

      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <div className="form-child-container">
            <div className="form-label-text">Add first image</div>
            <Field className="form-input-container  form-input-text" type="text" name="photo1" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photo1" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Add second image</div>
            <Field className="form-input-container  form-input-text" type="text" name="photo2" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photo2" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Add third image</div>
            <Field className="form-input-container  form-input-text" type="text" name="photo3" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photo3" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Add fourth image</div>
            <Field className="form-input-container  form-input-text" type="text" name="photo4" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photo4" component="div" />
          </div>
          <div className="form-child-container">
            <div className="form-label-text">Add fifth image</div>
            <Field className="form-input-container  form-input-text" type="text" name="photo5" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photo5" component="div" />
          </div>

          <button className="theme-button" type="button" onClick={() => {props.callback(false)}}>Cancel</button>

          <button className="theme-button" type="submit" disabled={isSubmitting}>
            Upload
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
};

AnswerImgForm.propTypes = {
  productName: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}

export default AnswerImgForm;



