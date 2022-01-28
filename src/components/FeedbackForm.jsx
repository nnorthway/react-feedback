import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(10);
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleInput = (e) => {
    if (e.target.value === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (e.target.value !== '' && e.target.value.trim().length < 10) {
      setBtnDisabled(true);
      setMsg("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating 
      };

      setText('');
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <p>Please Rate Your Experience</p>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className='input-group'>
          <label htmlFor='textReview'>Write a review</label>
          <input onChange={handleInput} type='text' placeholder='Write a review' id='textReview' value={text} />
        </div>
        <Button type='submit' version='primary' isDisabled={btnDisabled}>
          Send
        </Button>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
