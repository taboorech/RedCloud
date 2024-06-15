import "./Select.scss";
import M from "materialize-css";
import { useEffect, useRef } from "react";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Select({ value, onChange, header = "Choose an option", className, children }) {

  const selectRef = useRef();

  useEffect(() => {    
    M.FormSelect.init(selectRef.current)
  }, []);

  return (
    <div className={classNamesHandler("Select", className)}>
      <select className="browser-default" value={value} onChange={onChange}>
        <option value="" disabled>{ header }</option>
        { children }
      </select>
    </div>
  )
}

export default Select;