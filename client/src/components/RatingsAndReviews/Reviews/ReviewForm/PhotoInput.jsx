import React, {useState} from 'react';

const PhotoInputs = (props) => {
  const [url, setUrl] = useState('');

  const inputChange = () => {
    setUrl(event.target.value);
  }

  return (
    <div className = 'photo-inputs'>
      Enter Photo URL :
      <input className = 'photo-input' onChange = {inputChange} type = 'text'></input>
      <button className = 'photo-input-button' onClick = {() => { props.callback(url)}} >Enter</button>
    </div>
  );
};

export default PhotoInputs;