import React, {useState, useEffect, useContext} from 'react';
import ReviewContext from '../../../../context/reviews/ReviewContext';
import TraitRater from './TraitRater.jsx';
import StarRater from './StarRater.jsx';
import FormPhotoViewer from './FormPhotoViewer.jsx';
import PhotoInputs from './PhotoInput.jsx';
import axios from 'axios';

const ReviewForm = (props) => {
  const username = window.location.search.slice(10);
  console.log(username);
  const {reviewMeta} = useContext(ReviewContext);
  const [traits, setTraits] = useState([]);
  const [formData, setFormData] = useState({characteristics: {test: 5}, recommended: false, photos: [], username: username});
  const submitPOST = () => {

    const url = `/api/reviews/${props.product_id}/`;
    axios.post(url, formData)
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const inputDataSetter = (property) => {
    if (event.target.type === 'checkbox') {
        setFormData({...formData, [property]: !formData[property] });
    } else {
      if (property === 'email') {
        const regEx = /\S+@\S+\.\S+/;
        const isEmail = regEx.test(event.target.value);
        if (isEmail) {
          setFormData({...formData, [property]: event.target.value});
        } else {
          setFormData({...formData, [property]: ''});
        }
      } else {
        setFormData({...formData, [property]: event.target.value});
      }

    }

  };
  const clickStar = (value) => {
    setFormData({...formData, rating: value});
  }
  const radioClick = (trait, value) => {

    const copyState = {...formData.characteristics};
    copyState[trait] = value;
    setFormData({...formData, characteristics: copyState});
  }

  useEffect(() => {
    if (reviewMeta) {
      setTraits(reviewMeta.characteristics);
      const characteristics = {};
      Object.keys(reviewMeta.characteristics).forEach(key => {
        characteristics[key] = {id: reviewMeta.characteristics[key].id};
      })
      setFormData({...formData, characteristics: characteristics})
      console.log(characteristics)
    }

  }, [reviewMeta]);
  const addPhoto = (url) => {
    event.preventDefault();
    if (formData.photos.length < 5){
      const photos = [...formData.photos];
      photos.push(url);
      setFormData({...formData, photos: photos});
    } else {
      alert("Can only add 5 images.");
    }

  };
  const deletePhoto = (index) => {
    const photosCopy = [...formData.photos];
    photosCopy.splice(index, 1);
    setFormData({...formData, photos: photosCopy});
  }

  return (
    <div className = 'review-form'>
      <form onSubmit = {()=>{
          if (!formData.rating) {
            alert('Please give star rating.');
            return event.preventDefault();
          }
          const regEx = /\S+@\S+\.\S+/;
          const isEmail = regEx.test(formData.email);
          if (!isEmail) {
            event.preventDefault();
            alert('Please enter valid email.');
            return;
          }
          event.preventDefault();
          console.log(formData);
          submitPOST();
          props.callback(false);
        }}>
        <div className = 'review-form-title-container'>
          <h2>Write your review</h2>
          <h3>About this thing!!</h3>
          <input className = 'review-form-submit' type = 'submit' value = 'Post Review'/>
          <div className = "checkbox-container">
            <input   className = 'recommend-checkbox' onChange={inputDataSetter.bind(null, 'recommended')}type = 'checkbox' id = 'recommended' name = 'recommended' value = {true}/>
            <label className = 'recommend-checkbox-label' htmlFor = 'recommended'>I recommend this product!</label>
          </div>
         <StarRater callback = {clickStar}/>
        </div>
        <div className = 'review-form-input-fields'>
            <input onChange = {inputDataSetter.bind(null, 'summary')}type = 'text' required = 'required' maxLength = '60' className = 'review-form-summary input' placeholder = 'Enter Summary...'></input>
            <input required = 'required' onChange = {inputDataSetter.bind(null, 'email')} type = 'email' className = 'review-form-email input' placeholder = 'Enter Email...'></input>
            <textarea  required = 'required' minLength = '50' maxLength = '1000' onChange = {inputDataSetter.bind(null, 'body')} className = 'review-form-body input' placeholder = 'Enter your review...'></textarea>
            <PhotoInputs callback = {addPhoto} />
            <FormPhotoViewer photos = {formData.photos} deletePhoto = {deletePhoto}/>
        </div>

        <TraitRater callback = {radioClick}traits = {traits} ids={formData.characteristics}/>

      </form>
    </div>
  );
};

export default ReviewForm;