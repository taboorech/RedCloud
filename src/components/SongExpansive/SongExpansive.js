import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Image from "../Image/Image";
import Time from "../Time/Time";
import "./SongExpansive.scss";

function SongExpansive({ title, secondaryInfo, duration, songUrl, imageSrc, className, onClick }) {

  return (
    <div className={classNamesHandler("SongExpansive", className)} songurl = {songUrl} onClick={onClick}>
      <div className="content">
        <div className="image-block">
          <Image src={imageSrc} alt={"Song"}/>
        </div>
        <div className="title-block">
          <span>{ title }</span>
        </div>
      </div>
      <div className="secondary-info-block">
        { secondaryInfo }
      </div>
      <div className="additional-block">
        <div className="time-block">
          <Time className={"light"} time={duration}/>
        </div>
        <div className="additional-menu">
          <CircleButton className="black-button waves-effect waves-light white-text">
            <i className="material-icons">more_vert</i>
          </CircleButton>
        </div>
      </div>
    </div>
  )
}

export default SongExpansive;