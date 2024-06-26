import "./Input.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Input({ blockClassName, inputClassName, type = "text", id, labelText, value, onChange, isActive }) {
  return (
    <div className={classNamesHandler("Input input-field", blockClassName)}>
      <input id={id} type={type} className={inputClassName} value={value} onChange={onChange}/>
      <label htmlFor={id} className={isActive ? "active" : undefined}>{labelText}</label>
    </div>
  )
}

export default Input;