import CircleImage from "../CircleImage/CircleImage";
import "./Friend.scss";

function Friend() {
  return (
    <div className="Friend">
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"small-image image-block"} imageClasses = {"responsive-img"}/>
      <p class="truncate">Friend's name</p>
    </div>
  )
}

export default Friend;