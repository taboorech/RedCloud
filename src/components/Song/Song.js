import { classNamesHandler } from "../../utils/classNamesHandler";
import Image from "../Image/Image";
import Time from "../Time/Time";
import "./Song.scss";

function Song({ className }) {
  return (
    <div className={classNamesHandler("Song", className)}>
      <div className="content">
        <div className="image-block">
          <Image src={"./images/avatar.jpg"} />
        </div>
        <div className="title-block">
          <span>Name</span>
          <span>Author</span>
        </div>
      </div>
      <div className="time-block">
        <Time className={"secondary"} time={239}/>
      </div>
    </div>
  )
}

export default Song;