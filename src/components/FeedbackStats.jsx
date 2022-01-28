import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  //Calc ratings avg
  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length;

  avg = avg.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
      <Card>
        <h4>{feedback.length} Reviews</h4>
        <p>
          Average Rating: {isNaN(avg) ? 0 : avg}
        </p>
      </Card>
    </div>
  );
}

export default FeedbackStats;
