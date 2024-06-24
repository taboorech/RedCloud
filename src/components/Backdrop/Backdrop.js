import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Backdrop.scss";

function Backdrop({ className, onClick = () => {} }) {

  const clickHandler = (event) => {
    event.preventDefault();
    onClick();
  }

  return <div className={classNamesHandler("Backdrop", className)} onClick={clickHandler}></div>
}

export default Backdrop;