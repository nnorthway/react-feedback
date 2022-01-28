import { Link } from 'react-router-dom';
import Card from '../shared/Card';
function About() {
  return(
    <Card>
      <div className='card-body'>
        <h1 className='card-title'>About</h1>
        <p>
          This is my first for-real react app. Whoop!
        </p>
        <p className='smallcaps'>Version: 1.0.0</p>
        <Link to='/'>Back To Home</Link>
      </div>
    </Card>
  );
}

export default About;
