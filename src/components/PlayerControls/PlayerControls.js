import CircleButton from "../CircleButton/CircleButton";
import "./PlayerControls.scss";

function PlayerControls({ audioPlayer }) {

  const playButtonClickHandler = () => {
    if(audioPlayer.paused) {
      return audioPlayer.play();
    }

    return audioPlayer.pause();
  }

  return (
    <div className="Player-controls">
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">shuffle</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">skip_previous</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-dark white-button"} onClick = {playButtonClickHandler}>
        <i className="material-icons">play_arrow</i>
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