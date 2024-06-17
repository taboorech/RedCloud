import { classNamesHandler } from "../../../utils/classNamesHandler";
import "./ContextMenuButton.scss";

function ContextMenuButton({ className, children }) {
  return (
    <button className={classNamesHandler("Context-menu-button btn waves-effect waves-light", className)}>
      { children }
    </button>
  )
}

export default ContextMenuButton;