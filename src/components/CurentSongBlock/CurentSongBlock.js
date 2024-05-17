import "./CurentSongBlock.scss"
import SwitchButton from "./SwitchButton/SwitchButton"
import SongImage from "./SongImage/SongImage";

function CurentSongBlock(){
  return(
    <div className="CurentSongBlock">
      <div className="switch-button-container">
        <SwitchButton></SwitchButton>
      </div>
      <div className="song-image">
        <SongImage></SongImage>
      </div>
    </div>
  )
}

export default CurentSongBlock;