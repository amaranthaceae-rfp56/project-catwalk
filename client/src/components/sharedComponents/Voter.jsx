import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Voter = (props) => {
  //requires a props.question which is a string EX: Was this review helpful?
  const {id, section} = props;

  const [helpfulness, setHelpfulness] = useState(props.helpfulness);
  const [notVoted, setNotVoted] = useState(true);
  const [notReported, setNotReported] = useState(true);
  //requires a props.yes that fires on click events of Yes
  //requires a props.report that fires on click events of report

  // requires props.helpfulness an integer that displays the count of users that clicked yes
  useEffect(()=>{
    setHelpfulness(props.helpfulness);
  }, [props.helpfulness]);


  const wasHelpful = () => {
    const button = event.target;
    if (notVoted) {
      const options = {
        url: `/api/${section}s/helpful/`,
        method: 'PUT',
        params: id
      };
      axios(options)
        .then(() => {

          setHelpfulness(helpfulness+1);

          setNotVoted(false);

          button.className = 'voted';
        })
        .catch(err => {
          console.log(err);
        });
    }

  }

  const report = () => {
    if (notReported) {
      const button = event.target;
      const options = {
        url: `/api/${section}s/report/`,
        method: 'PUT',
        params: id
      };
      axios(options)
        .then(() => {
          setNotReported(false);
          button.className = 'reported';
        })
        .catch(err => {
          console.log(err);
        });
    }

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