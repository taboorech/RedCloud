import "./Textarea.scss";
import { classNamesHandler } from "../../utils/classNamesHandler"

function Textarea({ id, value, labelText, isActive, className, onChange }) {
  return (
    <div className={classNamesHandler("Textarea input-field", className)}>
      <textarea id={id} className={classNamesHandler("materialize-textarea", isActive ? "active" : undefined)} value={value} onChange={onChange}></textarea>
      <label htmlFor={id}>{ labelText }</label>
    </div>
  )
}

export default Textarea;