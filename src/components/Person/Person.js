import "./Person.scss";
import CircleImage from "../CircleImage/CircleImage";
import { classNamesHandler } from "../../utils/classNamesHandler";
import mainInstance from "../../api/mainInstance";

function Person({ user, className }) {
  return (
    <div className={classNamesHandler("Person", className)}>
      <CircleImage src={mainInstance.defaults.baseURL + user.imageUrl} alt='profileImage' className={"image-block"}/>
      <p>{ user.login }</p>
    </div>
  )
}

export default Person;