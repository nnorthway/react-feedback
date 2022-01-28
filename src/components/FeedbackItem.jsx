import { FaEdit, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  
  return (
    <Card reverse={item.rating > 7 && true}>
      <div className='num-display'>{item.rating}</div>
      <div className='card-body'>
        <div className='btn-group'>
          <button onClick={() => editFeedback(item)} className='btn edit'><FaEdit color='purple' /></button>
          <button onClick={() => deleteFeedback(item.id)} className='btn close'><FaTimes color='purple' /></button>
        </div>
        <div className='text-display'>{item.text}</div>
      </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem;
