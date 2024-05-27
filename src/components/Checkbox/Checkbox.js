import { classNamesHandler } from "../../utils/classNamesHandler";

function Checkbox({ className, children }) {
  return (
    <p className={classNamesHandler("Checkbox", className)}>
      <label className="valign-wrapper">
        <input type="checkbox"/>
        <span>{ children }</span>
      </label>
    </p>
  )
}

export default Checkbox;