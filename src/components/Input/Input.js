import "./Input.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Input({ blockClassName, inputClassName, type, id, labelText }) {
  return (
    <div className={classNamesHandler("Input input-field col", blockClassName)}>
      <input id={id} type={type} className={inputClassName} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default Input;