import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Tabs.scss";

function Tabs({ className, children }) {
  return (
    <div className={classNamesHandler("Tabs", className)}>
      { children }
    </div>
  )
}

export default Tabs;