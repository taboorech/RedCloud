import "./Person.scss";
import CircleImage from "../CircleImage/CircleImage";
import { classNamesHandler } from "../../utils/classNamesHandler";
import mainInstance from "../../api/mainInstance";
import { Link } from "react-router-dom";

function Person({ user, className }) {
  return (
    <Link to={`/profile/${user._id}`} className={classNamesHandler("Person", className)}>
      <CircleImage src={mainInstance.defaults.baseURL + user.imageUrl} alt='profileImage' className={"image-block"}/>
      <p>{ user.login }</p>
    </Link>
  )
}

export default Person;