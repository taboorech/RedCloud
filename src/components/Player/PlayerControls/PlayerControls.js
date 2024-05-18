import "./PlayerControls.scss";
import { useEffect } from "react";
import CircleButton from "../../CircleButton/CircleButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsPaused } from "../../../redux";

function PlayerControls({ audioPlayer }) {

  const isPaused = useSelector((state) => state.audioPlayer.isPaused);
  const dispatch = useDispatch();

  const playButtonClickHandler = () => {
    if(isPaused) {
      dispatch(setIsPaused(!isPaused));
      return audioPlayer.play();
    }

    dispatch(setIsPaused(!isPaused));
    return audioPlayer.pause();
  }

  useEffect(() => {
    audioPlayer.addEventListener("play", () => dispatch(setIsPaused(false)));
    audioPlayer.addEventListener("pause", () => dispatch(setIsPaused(true)));
  }, [audioPlayer, dispatch]);

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