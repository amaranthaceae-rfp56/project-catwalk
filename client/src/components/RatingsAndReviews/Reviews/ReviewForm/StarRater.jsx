import React, {useState} from 'react';

const StarRater = (props) => {
  const [stars, setStars] = useState(0);
  const [clickedStar, setClickedStar] = useState(0);
  const starSymbols = ['★','★','★','★','★'];

  const mouseOut = () => {
    setStars(clickedStar)
  };

  const mouseIn = (value) => {
    setStars(value+1);
  };
  const clickStar = (value) => {
    setClickedStar(value+1)
    props.callback(value+1);
  };
  return (
    <div className = 'star-rater'>
      {starSymbols.map((star, index) => {
        if (index+1 <= stars) {
          return (<div className = 'star filled' onClick = {clickStar.bind(null, index)} onMouseOut = {mouseOut} onMouseOver = {mouseIn.bind(null, index)}key = {index}>{star}</div>);
        } else {
          return (<div className = 'star' onClick = {clickStar.bind(null, index)} onMouseOut = {mouseOut} onMouseOver = {mouseIn.bind(null, index)}key = {index}>{star}</div>);
        }
      })}
    </div>
  );
}

export default StarRater;