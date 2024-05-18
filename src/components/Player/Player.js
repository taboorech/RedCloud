import "./Player.scss"
import ProgressBlock from "./ProgressBlock/ProgressBlock";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerAdditionalButtons from "./PlayerAdditionalButtons/PlayerAdditionalButtons";
import VolumeBlock from "./VolumeBlock/VolumeBlock";

function Player(){

  const audioPlayer = new Audio("./music/Tom Odell - Another Love.mp3");

  return(
    <div className="Player">
      <VolumeBlock audioPlayer={audioPlayer} className={"volume-controls-block"}/>
      <div className="controls-block">
        <PlayerControls audioPlayer = {audioPlayer} />
        <ProgressBlock audioPlayer = {audioPlayer} />
      </div>
      <PlayerAdditionalButtons className={"additional-buttons"}/>
    </div>
  )
}

export default Player;