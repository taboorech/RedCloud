import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Image from "../Image/Image";
import Time from "../Time/Time";
import "./SongExpansive.scss";

function SongExpansive({ title, secondaryInfo, duration, songId, songUrl, imageSrc, className, onClick, audio }) {

  const { setSource, setSongId } = audio;

  const clickHandler = (event) => {
    onClick && onClick();
    const songUrl = event.currentTarget.getAttribute("songurl");
    setSource(songUrl);
    setSongId(event.currentTarget.getAttribute("songid"))
  }

  const additionalButtonClickHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className={classNamesHandler("SongExpansive", className)} songid = {songId} songurl = {songUrl} onClick={clickHandler}>
      <div className="content">
        <div className="image-block">
          <Image src={imageSrc} alt={"Song"}/>
        </div>
        <div className="title-block">
          <span>{ title }</span>
        </div>
      </div>
      <div className="secondary-info-block truncate">
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

export default SongExpansive;