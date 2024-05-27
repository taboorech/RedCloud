import { Link } from 'react-router-dom';
import { classNamesHandler } from '../../utils/classNamesHandler';
import CircleImage from '../CircleImage/CircleImage';
import './Profile.scss';

function Profile({ className, username }) {
  return(
    <Link to={"/profile"} className={classNamesHandler('Profile', className)}>
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"image-block"}/>
      <h4>{ username }</h4>
    </Link>
  )
}

export default Profile;