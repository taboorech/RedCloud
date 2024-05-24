import "./Button.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Button({ className, children }) {
  return (
    <button className={classNamesHandler("Button btn", className)}>{ children }</button>
  )
}

export default Button;