import "./PlaylistBaner.scss";
import Image from "../Image/Image";
import CircleButton from "../CircleButton/CircleButton";
import Time from "../Time/Time";

function PlaylistBaner({ imageSource, title, songsCount, duration, isPrivate, isOwner = false }) {

  return (
    <div className="PlaylistBaner">
      <div className="playlist-info">
        <div className="image-block">
          <Image alt={"Song"} src={imageSource} />
        </div>
        <div className="text-block">
          <span className="playlist-title">{ title }</span>
          <span className="playlist-duration"><div>{songsCount} { songsCount === 1 ? "song" : "songs" }</div> - <Time className={"light"} time={duration}/></span>
          <span className="playlist-privacy">{isPrivate ? "Private" : "Public"} playlist</span>
        </div>
      </div>
      <div className="buttons">
        <CircleButton className="white-button waves-effect waves-dark btn-large play-button">
          <i className="material-icons">play_arrow</i>
        </CircleButton>
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">shuffle</i>
        </CircleButton>
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">file_download</i>
        </CircleButton>
        {isOwner &&
          <CircleButton className="black-button waves-effect waves-light btn-large white-text">
            <i className="material-icons">add_circle_outline</i>
          </CircleButton> 
        }
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">settings</i>
        </CircleButton>
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">more_vert</i>
        </CircleButton>
      </div>
    </div>
  )
}

export default PlaylistBaner;