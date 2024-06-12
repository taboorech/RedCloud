import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Image from "../Image/Image";
import Time from "../Time/Time";
import "./PlaylistExpansive.scss";

function PlaylistExpansive({ title, secondaryInfo, duration, imageSrc, className }) {

  const additionalButtonClickHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className={classNamesHandler("PlaylistExpansive", className)}>
      <div className="content">
        <div className="image-block">
          <Image src={imageSrc} alt={"Song"}/>
        </div>
        <div className="title-block" title={title}>
          <span>{ title }</span>
        </div>
      </div>
      <div className="secondary-info-block truncate" title={secondaryInfo}>
        { secondaryInfo }
      </div>
      <div className="additional-block">
        <div className="time-block">
          <Time className={"light"} time={duration}/>
        </div>
        <div className="additional-menu">
          <CircleButton className="black-button waves-effect waves-light white-text" onClick={additionalButtonClickHandler}>
            <i className="material-icons">more_vert</i>
          </CircleButton>
        </div>
      </div>
    </div>
  )
}

export default PlaylistExpansive;