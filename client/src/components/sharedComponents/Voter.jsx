import React, {useState} from 'react';
import axios from 'axios';


const Voter = (props) => {
  //requires a props.question which is a string EX: Was this review helpful?
  const {id, section} = props;

  const [helpfulness, setHelpfulness] = useState(props.helpfulness);
  //requires a props.yes that fires on click events of Yes
  //requires a props.report that fires on click events of report

  // requires props.helpfulness an integer that displays the count of users that clicked yes

  const wasHelpful = () => {

    const options = {
      url: `http://localhost:3000/api/${section}s/helpful/`,
      method: 'PUT',
      params: id
    };
    axios(options)
      .then(() => {
        console.log('Was helpful!');
        setHelpfulness(helpfulness+1);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const report = () => {
    console.log(id)
    const options = {
      url: `http://localhost:3000/api/${section}s/report/`,
      method: 'PUT',
      params: id
    };
    axios(options)
      .then(() => {
        console.log('Report!');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className = {'helpful-vote'}>
          {`Was this ${section} helpful?`}
          <div
          className = {'helpful-vote-option'}
          onClick = {wasHelpful}
          >Yes </div>
          {helpfulness} users found this helpful.
          <div
        className = 'helpful-vote-option'
        onClick = {report}
        >Report</div>
        </div>

  );
};

export default Voter;