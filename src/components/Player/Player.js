import "./Player.scss"
import ProgressBlock from "./ProgressBlock/ProgressBlock";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerAdditionalButtons from "./PlayerAdditionalButtons/PlayerAdditionalButtons";
import VolumeBlock from "./VolumeBlock/VolumeBlock";
import { classNamesHandler } from "../../utils/classNamesHandler";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Player({ className }){

  const { audioPlayer, source } = useSelector((state) => state.audioPlayer);

  useEffect(() => {
    audioPlayer.src = source;
  }, [audioPlayer, source]);

  return(
    <div className={classNamesHandler("Player", className)}>
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