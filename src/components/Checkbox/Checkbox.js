import { classNamesHandler } from "../../utils/classNamesHandler";

function Checkbox({ className, children }) {
  return (
    <p className={classNamesHandler("Checkbox", className)}>
      <label>
        <input type="checkbox" />
        <span>{ children }</span>
      </label>
    </p>
  )
}

export default Checkbox;