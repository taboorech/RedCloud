import "./PlaylistBaner.scss";
import Image from "../Image/Image";
import CircleButton from "../CircleButton/CircleButton";

function PlaylistBaner({ isOwner = false }) {

  return (
    <div className="PlaylistBaner">
      <div className="playlist-info">
        <div className="image-block">
          <Image alt={"Song"} src={"./images/Song.png"} />
        </div>
        <div className="text-block">
          <span className="playlist-title">Title</span>
          <span className="playlist-duration">20 songs - 23:20:12</span>
          <span className="playlist-privacy">Private playlist</span>
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