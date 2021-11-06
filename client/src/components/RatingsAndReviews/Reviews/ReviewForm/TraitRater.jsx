import React, {useState, useEffect} from 'react';

const TraitRater = (props) => {


  const traits = {};
  const [traitsKeys, setTraitsKeys] = useState([]);




  useEffect(()=>{
    setTraitsKeys(Object.keys(props.traits))


  },[props.traits])




  traits['SIZE'] = {
    name: 'Size',
    values: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too big' ],
    // id: props.traits.Size.id,
  }
  traits['WIDTH'] = {
    name: 'Width',
    values: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide' ],
    // id: props.traits.Size.id,
  }
  traits['LENGTH'] = {
    name: 'Length',
    values: ['Short', 'Slightly Short', 'Perfect', 'Slightly Long', 'Long' ],
    // id: props.traits.Size.id,
  }
  traits['COMFORT'] = {
    name: 'Comfort',
    values: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect' ],
    // id: props.traits.Size.id,
  }
  traits['QUALITY'] = {
    name: 'Qaulity',
    values: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect' ],
    // id: props.traits.Size.id,
  }
  traits['FIT'] = {
    name: 'Fit',
    values: ['Tight', 'Slightly Tight', 'Perfect', 'Slightly Loose', 'Loose' ],
    // id: props.traits.Size.id,
  }
  if (traitsKeys.length > 0 && traits) {
    return (
      <div className = 'form-characteristics-voting-container'>
        {traitsKeys.map((trait, index) => {
          return (
            <div className = 'trait-rater-container' key = {`trait-rater-container-${index}`}>
              <p className = 'radio-title'>{trait}</p>
              <div className = 'trait-rater-options-container'>
              {traits[trait.toUpperCase()].values.map((value, i) => {
                return (
                  <div key = {`trait-rater-container-${index}-option-${i}`}>
                      <input required = 'required' onChange = {()=>{props.callback(trait, {id: props.ids[trait].id, value: i+1})}} type = 'radio' id = {`${trait}-${i+1}`} name = {`${trait}`} value = {i+1}/>
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