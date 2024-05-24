import "./Person.scss";
import CircleImage from "../CircleImage/CircleImage";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Person({ username, className }) {
  return (
    <div className={classNamesHandler("Person", className)}>
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"image-block"}/>
      <p>{ username }</p>
    </div>
  )
}

export default Person;