import React, {useState, useEffect} from 'react';

const TraitRater = (props) => {


  const traits = {};
  const initialState = {};
  props.traits.forEach(trait => initialState[trait] = 0);
  // console.log(initialState);

  const [values, setValues] = useState(initialState);

  useEffect(()=>{
    setValues(initialState);
  }, [props.traits]);



  traits['SIZE'] = {
    name: 'Size',
    values: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too big' ]
  }
  traits['WIDTH'] = {
    name: 'Width',
    values: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide' ]
  }
  traits['LENGTH'] = {
    name: 'Length',
    values: ['Short', 'Slightly Short', 'Perfect', 'Slightly Long', 'Long' ]
  }
  traits['COMFORT'] = {
    name: 'Comfort',
    values: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect' ]
  }
  traits['QUALITY'] = {
    name: 'Qaulity',
    values: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect' ]
  }
  traits['FIT'] = {
    name: 'Fit',
    values: ['Tight', 'Slightly Tight', 'Perfect', 'Slightly Loose', 'Loose' ]
  }
  if (props.traits.length > 0 && traits) {
    return (
      <div className = 'form-characteristics-voting-container'>
        {props.traits.map((trait, index) => {
          return (
            <div className = 'trait-rater-container' key = {`trait-rater-container-${index}`}>
              <p className = 'radio-title'>{trait}</p>
              <div className = 'trait-rater-options-container'>
              {traits[trait.toUpperCase()].values.map((value, i) => {
                return (
                  <div key = {`trait-rater-container-${index}-option-${i}`}>
                      <input onChange = {()=>{props.callback(trait, i+1)}} type = 'radio' id = {`${trait}-${i+1}`} name = {`${trait}`} value = {i+1}/>
                      <label htmlFor = {`${trait}-${i+1}`} >{value}</label>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        LOADING...
      </div>
    );
  }

};

export default TraitRater;