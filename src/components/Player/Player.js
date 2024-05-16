import "./Player.scss"
import ProgressBlock from "../ProgressBlock/ProgressBlock";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerAdditionalButtons from "../PlayerAdditionalButtons/PlayerAdditionalButtons";

function Player(){

  const audioPlayer = new Audio("./music/Tom Odell - Another Love.mp3");

  return(
    <div className="Player">
      <div className="volume-block">

      </div>
      <div className="controls-block">
        <PlayerControls/>
        <ProgressBlock audioPlayer = {audioPlayer} />
      </div>
      <PlayerAdditionalButtons/>
    </div>
  )
}

export default Player;