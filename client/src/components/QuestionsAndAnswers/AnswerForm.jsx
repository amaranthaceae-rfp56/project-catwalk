import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from '../sharedComponents/Modal.jsx';
import AnswerImgForm from './AnswerImgForm.jsx';
//import trash from '../../../assets/trash-solid.svg';
import '../../styles/sections/_questions.scss';

const AnswerForm = (props) => {

  const [imgModalVisible, setImgModalVisible] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [uploadPhotoButtonLabel, setUploadPhotoButtonLabel] = useState('Upload photo');
  const [photoView, setPhotoView] = useState(false);
  const [image, setImage] = useState('');

  const handleAddImages = () => {
    setImgModalVisible(true);
  }

  const handlePhotoView = (photo) => {
    setImage(photo);
    setPhotoView(true);
  }

  const handlePhotoUpload = (newPhoto) => {
    if (uploadedPhotos.length < 5) {
      const previousPhotoArray = [...uploadedPhotos];
      previousPhotoArray.push(newPhoto);
      setUploadedPhotos(previousPhotoArray);
      setUploadPhotoButtonLabel('Upload next photo');
    } else {
      setUploadPhotoButtonLabel('');
    }
  }

  const handleDeleteImages = (index) => {
    const previousPhotoArray = [...uploadedPhotos];
    previousPhotoArray.splice(index, 1);
    setUploadedPhotos(previousPhotoArray);
  }


  return (

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

        const options = {
          url: `/api/qa/questions/:question_id/answers`,
          method: 'POST',
          params: {
            question_id: props.questionId,
           },
          data: {
            name: values.nickname,
            email: values.email,
            body: values.answer,
            photos: uploadedPhotos,
          }
        };

        axios(options)
          .then(() => {
            props.callback(false);
            alert('Your answer has been submitted!');
            let id = 6000000 + Math.floor(Math.random() * 9000);
            props.updateAnswerSet(
              id, {
              body: values.answer,
              date: Date.now(),
              answerer_name: values.nickname,
              helpfulness: 0,
              photos: uploadedPhotos,
            });
            setSubmitting(false);
          })
          .then(() => {
            axios({
              url: options.url,
              method: 'GET',
              params: { question_id: props.questionId},
            })
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

          <div className="form-child-container">
            <div className="form-label-text">{`Uploaded photos (Max: 5)`}</div>
            {uploadedPhotos.length < 5 ? <button className="upload-photo-button" type="button" onClick={handleAddImages}>{uploadPhotoButtonLabel}</button> : <></>}
            {uploadedPhotos.length === 0 ? <div className="form-child-container">
            <div className="form-other-text">No photos have been uploaded</div>
          </div> : <></>}
          </div>
          <div className="form-child-photo-container">
            {uploadedPhotos.map ((photo, index)  => (
              <div className="form-thumbnail" key={index}>
                <img className="form-thumbnail-img" src={photo} onClick={() => handlePhotoView(photo)} />
                <div className="form-thumbnail-delete" onClick={() => handleDeleteImages(index)} >X</div>
                {/* <img className="form-thumbnail-delete" src={trash} onClick={() => handleDeleteImages(index)} /> */}
              </div>
            ))}
          </div>
          {photoView ? <Modal class="questionAnswer-submit" callback={setPhotoView} left={87} top={46} component={<img className="questionAnswer-photo-view" src={image} max-height="60vh" callback={setPhotoView} /> } /> : <></>}

          <button className="theme-button" type="submit" disabled={isSubmitting}>
            Submit answer
          </button>
        </Form>
      )}
    </Formik>

    {imgModalVisible ? <Modal class="questionAnswer-upload-submit" callback={setImgModalVisible} left={87} top={46} both={false} component={<AnswerImgForm handlePhotoUpload={handlePhotoUpload} callback={setImgModalVisible} photoUploadIndex={uploadedPhotos.length} productName={props.productName} questionBody={props.questionBody} questionId={props.questionId} />}/> : <></>}

  </div>
  )
};

AnswerForm.propTypes = {
  productName: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  updateAnswerSet: PropTypes.func.isRequired
}

export default AnswerForm;



