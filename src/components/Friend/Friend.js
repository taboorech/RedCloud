import CircleImage from "../CircleImage/CircleImage";
import "./Friend.scss";

function Friend() {
  return (
    <div className="Friend">
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"responsive-img small-image image-block"}/>
      <p>Friend's name</p>
    </div>
  )
}

export default Friend;