import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../sharedComponents/Modal.jsx';
import axios from 'axios';
import '../../styles/sections/_questions.scss';

const AnswerItem = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.answer.helpfulness);
  const [reportDisable, setReportDisable] = useState(false);
  const [reportFont, setReportFont] = useState('report-font')
  const [reportLabel, setReportLabel] = useState('Report');
  const [photoView, setPhotoView] = useState(false);
  const [image, setImage] = useState('');

  const handlePhotoView = (photo) => {
    setImage(photo);
    setPhotoView(true);
  }

  const handleUserAction = (userAction) => {

    const options = {
      url: `/api/qa/answers/:answer_id/${userAction}/`,
      method: 'PUT',
      params: {
        answer_id: props.answer.id
      }
    };

    axios(options)
      .then(() => {
        console.log('user found answer helpful!');
        if (userAction === 'helpful') {
          setHelpfulCount(helpfulCount + 1);
        } else {
          if (!reportDisable) {
            console.log('user reported this answer');
            setReportDisable(true);
            setReportLabel('Reported');
            setReportFont('reported-font');
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // PUT /qa/questions/:question_id/report
  // PUT /qa/answers/:answer_id/report


  let foundHelpful = (<div className="found-helpful-font" onClick={() => {handleUserAction('helpful')}} >Yes</div>);

  let doReport = (<div className={reportFont} onClick={() => {handleUserAction('report')}} >{reportLabel}</div>);

  let dateAnswered = new Date(props.answer.date).toLocaleDateString(undefined,{month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <div>
    <div className="questions-container">
      <div className="answers-font">{props.answer.body}</div>
    </div>

    <div className="questions-container">
      {props.answer.photos.map ((photo, index)  => (
        <img className="form-thumbnail" key={index} src={photo} height = "50" width = "50" onClick={() => handlePhotoView(photo)}/>
      ))}
    </div>

    {photoView ? <Modal class="questionAnswer-submit" callback={setPhotoView} left={87} top={46} component={<img className="questionAnswer-photo-view" src={image} callback={setPhotoView} /> } /> : <></>}

    <div className="questions-container answers-info-font">
      <div className="answer-author-container">{`by ${props.answer.answerer_name}, ${dateAnswered}`}</div>
      <div className="answer-helpful-container">
        <div>{`Helpful?  `}</div>
        <div>{foundHelpful}</div>
        {`  (${helpfulCount})`}
      </div>
      <div className="answer-report-container">
        <div>{doReport}</div>
      </div>
    </div>
    </div>
  )
};

AnswerItem.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default AnswerItem;