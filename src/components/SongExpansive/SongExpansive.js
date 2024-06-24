import { useRef } from "react";
import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Image from "../Image/Image";
import Time from "../Time/Time";
import ContextMenu from "../ContextMenu/ContextMenu";
import ContextMenuButton from "../ContextMenu/ContextMenuButton/ContextMenuButton";
import "./SongExpansive.scss";

function SongExpansive({ title, secondaryInfo, duration, songId, songUrl, imageSrc, className, onClick, audio }) {

  const { setSource, setSongId } = audio;
  const contextMenuButtonRef = useRef();

  const clickHandler = (event) => {
    if(event.target.classList.contains("additional-menu-button") || event.target.classList.contains("Backdrop")) {
      return;
    }
    onClick && onClick();
    const songUrl = event.currentTarget.getAttribute("songurl");
    setSource(songUrl);
    setSongId(event.currentTarget.getAttribute("songid"))
  }

  // const additionalButtonClickHandler = (event) => {
  //   event.preventDefault();
    // contextMenuButtonRef.current.classList.remove("close");
  // }

  return (
    <div className={classNamesHandler("SongExpansive", className)} songid = {songId} songurl = {songUrl} onClick={clickHandler}>
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
          <CircleButton className="black-button waves-effect waves-light white-text additional-menu-button" innerRef={contextMenuButtonRef}>
            <i className="material-icons additional-menu-button">more_vert</i>
          </CircleButton>
        </div>
      </div>
      <ContextMenu button={contextMenuButtonRef}>
        <ContextMenuButton>Play</ContextMenuButton>
        <ContextMenuButton>Add to playlist</ContextMenuButton>
        <ContextMenuButton>Add to favorites</ContextMenuButton>
        <ContextMenuButton>Share</ContextMenuButton>
        <ContextMenuButton>Add to queue</ContextMenuButton>
        <ContextMenuButton>Listen together</ContextMenuButton>
        <ContextMenuButton>Author info</ContextMenuButton>
        <ContextMenuButton>Song info</ContextMenuButton>
        <ContextMenuButton className={"red-text text-darken-1"}>Remove from playlist</ContextMenuButton>
      </ContextMenu>
    </div>
  )
}

export default SongExpansive;