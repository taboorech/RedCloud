import { classNamesHandler } from '../../utils/classNamesHandler';
import CircleImage from '../CircleImage/CircleImage';
import './Profile.scss';

function Profile({ className }) {
  return(
    <div className={classNamesHandler('Profile', className)}>
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"image-block"}/>
      <h4>Name</h4>
    </div>
  )
}

export default Profile;