import React, {useState, useEffect} from 'react';


const ReviewForm = (props) => {
  return (
    <div className = 'review-form'>
      <form>
        <div className = 'review-form-title-container'>
          <h2>Write your review</h2>
          <h3>About this thing!!</h3>
        </div>
        <div className = 'input-fields'>
            <input type = 'text' className = 'review-form-summary input' placeholder = 'Enter Summary...'></input>
            <input type = 'email' className = 'review-form-email input' placeholder = 'Enter Email...'></input>
            <textarea  className = 'review-form-body input' placeholder = 'Enter your review...'></textarea>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;