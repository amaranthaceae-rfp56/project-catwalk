import React from 'react';


const Voter = (props) => {
  //requires a props.question which is a string EX: Was this review helpful?

  //requires a props.yes that fires on click events of Yes
  //requires a props.no that fires on click events of no

  return (
    <div className = {'helpful-vote'}>
          {props.question}
          <div
          className = {'helpful-vote-option'}
          onClick = {props.yes}
          >Yes</div>

        </div>
  );
};

export default Voter;