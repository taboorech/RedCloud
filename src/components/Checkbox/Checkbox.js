import { classNamesHandler } from "../../utils/classNamesHandler";

function Checkbox({ isChecked, className, children, onChange }) {
  return (
    <p className={classNamesHandler("Checkbox", className)}>
      <label className="valign-wrapper">
        <input type="checkbox" checked={isChecked} onChange={onChange}/>
        <span>{ children }</span>
      </label>
    </p>
  )
}

export default Checkbox;