import Card from './shared/Card';
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackStats() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  //Calc ratings avg
  if (!isLoading) {
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

  return <Spinner />;
}

export default FeedbackStats;
