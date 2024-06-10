import "./Select.scss";
import M from "materialize-css";
import { useEffect, useRef, useState } from "react";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Select({ value, onChange, header = "Choose an option", className, children }) {

  // const [value, setValue] = useState("");
  const selectRef = useRef();

  // const onChangeHandler = (event) => {
  //   setValue(event.target.value);
  // }

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