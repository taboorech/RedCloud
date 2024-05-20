import "./CurentSongBlock.scss"
import SwitchButton from "./SwitchButton/SwitchButton"
import Image from "../Image/Image";
import CircleButton from "../CircleButton/CircleButton";
import SongsBlock from "./SongsBlock/SongsBlock";

function CurentSongBlock(){
  return(
    <div className="CurentSongBlock">
      <div className="switch-button-container">
        <SwitchButton/>
      </div>
      <div className="song-image">
        <Image src={"./images/Song.png"} alt="Song" />
      </div>
      <div className="close-button-block">
        <CircleButton className="white-button waves-effect waves-dark">
          <i className="material-icons">chevron_right</i>
        </CircleButton>
      </div>
      <SongsBlock/>
    </div>
  )
}

export default CurentSongBlock;