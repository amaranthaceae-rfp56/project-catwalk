import React, {useContext, useEffect, useState} from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';
import BarGraph from './BarGraph.jsx';
import StarRating from '../../sharedComponents/StarRating.jsx';
import Characteristics from './Characteristics.jsx';

const RatingsData = () => {

  const {reviewMeta} = useContext(ReviewContext);
  const {
    avgRatings,
    characteristics,
    ratings,
    recommended
  } = reviewMeta;


  const [percentRec, setPercentRec] = useState(0);
  const [graph, setGraph] = useState(null)

  useEffect(() => {
    if (recommended) {
      setPercentRec(Math.round((Number(recommended.true) /(Number(recommended.true) + Number(recommended.false))) * 100));
    }
  }, [recommended]);
  useEffect(() => {
    if (ratings) {
      setGraph(<BarGraph ratings = {ratings} count = {reviewMeta.avgReviewCount}/>)
    }
  }, [ratings]);

  return (
    <div className = 'ratings-data-container'>
      <div>
        AVG RATIING : {avgRatings}
        <StarRating rating = {avgRatings}/>
      </div>
      <div className = 'percent-rec'>{percentRec}% reviewers recommended!</div>

        {graph}



        <Characteristics traits = {characteristics}/>

    </div>
  );
};

export default RatingsData;