import React, {useState} from 'react';

const PhotoInputs = (props) => {
  const [url, setUrl] = useState('');

  const inputChange = () => {
    setUrl(event.target.value);
  }

  return (
    <div className = 'photo-inputs'>
      Enter Photo URL :
      <input onChange = {inputChange} type = 'text'></input>
      <button onClick = {() => { props.callback(url)}} >Enter</button>
    </div>
  );
};

export default PhotoInputs;