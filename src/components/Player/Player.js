import "./Player.scss"
import ProgressBlock from "./ProgressBlock/ProgressBlock";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerAdditionalButtons from "./PlayerAdditionalButtons/PlayerAdditionalButtons";
import VolumeBlock from "./VolumeBlock/VolumeBlock";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Player({ audio, className }){

  return(
    <div className={classNamesHandler("Player", className)}>
      <VolumeBlock audio={audio} className={"volume-controls-block"}/>
      <div className="controls-block">
        <PlayerControls audio = {audio} />
        <ProgressBlock audio = {audio} />
      </div>
      <PlayerAdditionalButtons className={"additional-buttons"}/>
    </div>
  )
}

export default Player;