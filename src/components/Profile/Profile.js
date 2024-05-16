import './Profile.scss';

function Profile() {
  return(
    <div className='Profile'>
      <div className='image-block'>
        <img src={"./images/avatar.jpg"} alt='profileImage' className='responsive-img'/>
      </div>
      <h4>Name</h4>
    </div>
  )
}

export default Profile;