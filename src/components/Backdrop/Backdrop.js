import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Backdrop.scss";

function Backdrop({ className, onClick }) {
  return <div className={classNamesHandler("Backdrop", className)} onClick={onClick}></div>
}

export default Backdrop;