import { Link } from 'react-router-dom';
import { classNamesHandler } from '../../utils/classNamesHandler';
import CircleImage from '../CircleImage/CircleImage';
import './Profile.scss';
import Button from '../Button/Button';
import { useFetchUserInfoQuery } from "../../redux";
import mainInstance from '../../api/mainInstance';
import { useAuth } from '../../hooks/use-auth';

function Profile({ className }) {

  const { data } = useFetchUserInfoQuery();
  const { isAuth } = useAuth();

  return(
    <Link to={isAuth ? `/profile` : "/auth#auth"} className={classNamesHandler('Profile', className)}>
      <CircleImage src={ (isAuth && (data && mainInstance.defaults.baseURL + data.imageUrl)) || "./images/profile.jpg"} alt='profileImage' className={"image-block"}/>
      <h4>{ (isAuth && (data && data.login)) || <Button isLink={true} to={"/auth#auth"} className={"white-button waves-effect waves-dark auth-button"}>Log in</Button> }</h4>
    </Link>
  )
}

export default Profile;