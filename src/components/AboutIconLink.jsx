import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

function AboutIconLink() {
  return (
    <Link className='about-icon-link' to='/about'>
      <FaQuestion />
    </Link>
  );
}

export default AboutIconLink;
