import "./Input.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Input({ blockClassName, inputClassName, type = "text", id, labelText }) {
  return (
    <div className={classNamesHandler("Input input-field", blockClassName)}>
      <input id={id} type={type} className={inputClassName} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default Input;