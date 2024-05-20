import { classNamesHandler } from "../../utils/classNamesHandler";
import "./CircleButton.scss";

function CircleButton({ className = "", title, children, onClick }) {

  return (
    <button className={classNamesHandler("Circle-button btn-floating", className)} onClick={onClick} title={title}>
      {children}
    </button>
  )
}

export default CircleButton;