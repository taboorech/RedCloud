import "./PlayerAdditionalButtons.scss";
import CircleButton from "../../CircleButton/CircleButton";
import { classNamesHandler } from "../../../utils/classNamesHandler";

function PlayerAdditionalButtons({ className }) {
  return (
    <div className={classNamesHandler("Player-additional-buttons", className)}>
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