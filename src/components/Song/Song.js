import { classNamesHandler } from "../../utils/classNamesHandler";
import Image from "../Image/Image";
import Time from "../Time/Time";
import "./Song.scss";

function Song({ title, author, duration, imageUrl, className }) {
  return (
    <div className={classNamesHandler("Song", className)}>
      <div className="content">
        <div className="image-block">
          <Image src={imageUrl} />
        </div>
        <div className="title-block">
          <span>{ title }</span>
          <span>{ author }</span>
        </div>
      </div>
      <div className="time-block">
        <Time className={"secondary"} time={duration}/>
      </div>
    </div>
  )
}

export default Song;