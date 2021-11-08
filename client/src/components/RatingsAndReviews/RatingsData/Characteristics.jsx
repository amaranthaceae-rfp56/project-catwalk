import React, {useState, useEffect} from 'react';


const Characteristics = (props) => {

  const [results, setResults] = useState([]);
  const meters = [];
 for (let trait in props.traits) {
   const score = {'--score': props.traits[trait].value * 20};

  let meter;
  // console.log(props.traits);
  switch (trait.toUpperCase()) {
    case 'FIT':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Small</p>
            <p className = 'mark-mid'>Perfect</p>
            <p className = 'mark-right'>Big</p>
          </div>
      </div>);
      break;

    case 'LENGTH':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Short</p>
            <p className = 'mark-mid'>Perfect</p>
            <p className = 'mark-right'>Long</p>
          </div>
      </div>);
      break;

    case 'COMFORT':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Poor</p>
            <p className = 'mark-mid'>Okay</p>
            <p className = 'mark-right'>Perfect</p>
          </div>
      </div>);
      break;

    case 'QUALITY':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Poor</p>
            <p className = 'mark-mid'>Okay</p>
            <p className = 'mark-right'>Perfect</p>
          </div>
      </div>);
      break;

    case 'SIZE':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Small</p>
            <p className = 'mark-mid'>Perfect</p>
            <p className = 'mark-right'>Big</p>
          </div>
      </div>);
      break;

      case 'WIDTH':
      meter = (
        <div className = 'characteristics-container'>
          <p className = 'characteristic-label'>{trait}</p>
          <div className = 'characteristic-line-plot'>
              <div className = 'line-plot-marker' style = {score}></div>
          </div>
          <div className = 'line-plot-value-marks'>
            <p className = 'mark-left'>Narrow</p>
            <p className = 'mark-mid'>Perfect</p>
            <p className = 'mark-right'>Wide</p>
          </div>
      </div>);
      break;
  }

  meters.push(meter);

}
useEffect(()=>{
  setResults(meters);
},[props.traits]);
  return (
    <div className = 'characteristics-graph-container'>
      {results.map(scoreMeter => {return scoreMeter})}
    </div>
  );
};

export default Characteristics;