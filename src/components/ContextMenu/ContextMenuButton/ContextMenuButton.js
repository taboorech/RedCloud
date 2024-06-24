import { classNamesHandler } from "../../../utils/classNamesHandler";
import "./ContextMenuButton.scss";

function ContextMenuButton({ className, children, ...props }) {
  return (
    <button className={classNamesHandler("Context-menu-button btn waves-effect waves-light", className)} {...props}>
      { children }
    </button>
  )
}

export default ContextMenuButton;