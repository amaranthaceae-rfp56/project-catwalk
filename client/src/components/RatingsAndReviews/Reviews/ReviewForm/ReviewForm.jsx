import React, {useState, useEffect, useContext} from 'react';
import ReviewContext from '../../../../context/reviews/ReviewContext';
import TraitRater from './TraitRater.jsx';
import StarRater from './StarRater.jsx';


const ReviewForm = (props) => {
  const {reviewMeta} = useContext(ReviewContext);
  const [traits, setTraits] = useState([]);
  const [formData, setFormData] = useState({characteristics: {test: 5}, recommended: false});

  const inputDataSetter = (property) => {
    if (event.target.type === 'checkbox') {
        setFormData({...formData, [property]: !formData[property] });
    } else {
      setFormData({...formData, [property]: event.target.value});
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

  }, [reviewMeta])

  return (
    <div className = 'review-form'>
      <form>
        <div className = 'review-form-title-container'>
          <h2>Write your review</h2>
          <h3>About this thing!!</h3>
          <input  onChange={inputDataSetter.bind(null, 'recommended')}type = 'checkbox' id = 'recommended' name = 'recommended' value = {true}/>
          <label htmlFor = 'recommended'>I recommend this product!</label>
         <StarRater callback = {clickStar}/>
        </div>
        <div className = 'input-fields'>
            <input onChange = {inputDataSetter.bind(null, 'summary')}type = 'text' className = 'review-form-summary input' placeholder = 'Enter Summary...'></input>
            <input onChange = {inputDataSetter.bind(null, 'email')} type = 'email' className = 'review-form-email input' placeholder = 'Enter Email...'></input>
            <textarea  onChange = {inputDataSetter.bind(null, 'body')} className = 'review-form-body input' placeholder = 'Enter your review...'></textarea>
        </div>

        <TraitRater callback = {radioClick}traits = {traits} ids={formData.characteristics}/>
      </form>
    </div>
  );
};

export default ReviewForm;