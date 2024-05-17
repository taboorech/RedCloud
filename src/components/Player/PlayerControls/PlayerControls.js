import { useEffect, useState } from "react";
import CircleButton from "../../CircleButton/CircleButton";
import "./PlayerControls.scss";

function PlayerControls({ audioPlayer }) {

  const [isPaused, setIsPaused] = useState(audioPlayer.paused);

  const playButtonClickHandler = () => {
    if(isPaused) {
      setIsPaused(!isPaused);
      return audioPlayer.play();
    }

    setIsPaused(!isPaused);
    return audioPlayer.pause();
  }

  useEffect(() => {
    audioPlayer.addEventListener("play", () => setIsPaused(false));
    audioPlayer.addEventListener("pause", () => setIsPaused(true));
  }, [audioPlayer]);

  return (
    <div className="Player-controls">
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">shuffle</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">skip_previous</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-dark white-button"} onClick = {playButtonClickHandler}>
        <i className="material-icons">{isPaused ? "play_arrow" : "pause"}</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">skip_next</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">repeat</i>
      </CircleButton>
    </div>
  )
}

export default PlayerControls;