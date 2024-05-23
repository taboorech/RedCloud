import "./Person.scss";
import CircleImage from "../CircleImage/CircleImage";

function Person({ username }) {
  return (
    <div className="Person">
      <CircleImage src={"./images/avatar.jpg"} alt='profileImage' className={"image-block"}/>
      <p>{ username }</p>
    </div>
  )
}

export default Person;