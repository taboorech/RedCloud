import "./Textarea.scss";
import { classNamesHandler } from "../../utils/classNamesHandler"

function Textarea({ id, labelText, className }) {
  return (
    <div className={classNamesHandler("Textarea input-field", className)}>
      <textarea id={id} className="materialize-textarea"></textarea>
      <label htmlFor={id}>{ labelText }</label>
    </div>
  )
}

export default Textarea;