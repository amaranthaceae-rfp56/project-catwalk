import React, {useState, useEffect} from 'react';


const Characteristics = (props) => {

  const [results, setResults] = useState([]);
  const meters = [];
 for (let trait in props.traits) {
   const score = {'--score': props.traits[trait].value * 20};
  console.log(trait.toUpperCase());
  let meter;
  // console.log(props.traits);
  switch (trait.toUpperCase()) {
    case 'FIT':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Too Small</p>
            <p>Perfect</p>
            <p>Too Big</p>
          </div>
      </div>);
      break;

    case 'LENGTH':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Too Short</p>
            <p>Perfect</p>
            <p>Too Long</p>
          </div>
      </div>);
      break;

    case 'COMFORT':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Uncomfortable</p>
            <p>Okay</p>
            <p>Perfect</p>
          </div>
      </div>);
      break;

    case 'QUALITY':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Poor</p>
            <p>Okay</p>
            <p>Perfect</p>
          </div>
      </div>);
      break;

    case 'SIZE':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Too Small</p>
            <p>Perfect</p>
            <p>Too Big</p>
          </div>
      </div>);
      break;

      case 'WIDTH':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}>&#9679;</div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p>Too Narrow</p>
            <p>Perfect</p>
            <p>Too Wide</p>
          </div>
      </div>);
      break;
  }

  meters.push(meter);
  // console.log(results);
}
useEffect(()=>{
  setResults(meters);
},[props.traits]);
  return (
    <div>
      {results.map(scoreMeter => {return scoreMeter})}
    </div>
  );
};

export default Characteristics;