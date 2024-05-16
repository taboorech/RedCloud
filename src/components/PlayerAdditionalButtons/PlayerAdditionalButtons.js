import "./PlayerAdditionalButtons.scss";
import CircleButton from "../CircleButton/CircleButton";

function PlayerAdditionalButtons() {
  return (
    <div className="Player-additional-buttons">
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">block</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">group_add</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">short_text</i>
      </CircleButton>
      <CircleButton className={"btn-small waves-effect waves-light black-button"}>
        <i className="material-icons">translate</i>
      </CircleButton>
    </div>
  )
}

export default PlayerAdditionalButtons;