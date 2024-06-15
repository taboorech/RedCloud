import "./PlayerControls.scss";
import CircleButton from "../../CircleButton/CircleButton";

function PlayerControls({ audio }) {

  const { playing, toggle, nextSong, prevSong } = audio;

  const playButtonClickHandler = () => {
    toggle();
  }

  return (
    <div className="Player-controls">
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">shuffle</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"} onClick={prevSong}>
        <i className="material-icons">skip_previous</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-dark white-button"} onClick = {playButtonClickHandler}>
        <i className="material-icons">{!playing ? "play_arrow" : "pause"}</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"} onClick={nextSong}>
        <i className="material-icons">skip_next</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">repeat</i>
      </CircleButton>
    </div>
  )
}

export default PlayerControls;