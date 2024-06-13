import { Link } from "react-router-dom";
import CircleImage from "../CircleImage/CircleImage";
import "./Friend.scss";

function Friend({ id, friendName, imageSrc }) {
  return (
    <Link className="Friend" to={`/profile/${id}`}>
      <CircleImage src={ imageSrc } alt='profileImage' className={"small-image image-block"}/>
      <p className="truncate">{ friendName }</p>
    </Link>
  )
}

export default Friend;