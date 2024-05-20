import CircleImage from '../CircleImage/CircleImage';
import './Profile.scss';

function Profile() {
  return(
    <div className='Profile'>
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"image-block"}/>
      <h4>Name</h4>
    </div>
  )
}

export default Profile;