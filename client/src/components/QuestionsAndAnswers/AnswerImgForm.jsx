import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/sections/_questions.scss';

const AnswerImgForm = (props) => {

  return (

  <div className="form-container">
    <div className="form-child-container">
      <div className="form-title-text">{`Upload your photos: ${props.photoUploadIndex + 1} of 5`}</div>
      <div className="form-subtitle-info-text">{`${props.productName}: ${props.questionBody}`}</div>
  </div>

    <Formik
      initialValues={{ photoUrl: '' }}
      validate={values => {
        const errors = {};

        // URL Verification
       if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.photoUrl)) {
          errors.photoUrl = 'Must be a valid URL';
        }
        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        props.handlePhotoUpload(values.photoUrl.toString());
        props.callback(false);
        alert('Photo successfully uploaded', values.photoUrl);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <div className="form-child-container">
            <div className="form-label-text">Add photo url</div>
            <Field className="form-input-container  form-input-text" type="text" name="photoUrl" placeholder="img url..." />
            <ErrorMessage className="form-error-text" name="photoUrl" component="div" />
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
  photoUploadIndex: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  handlePhotoUpload: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
}

export default AnswerImgForm;
