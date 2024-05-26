import "./Tab.scss";
import Button from "../../Button/Button";
import { classNamesHandler } from "../../../utils/classNamesHandler";

function Tab({ className, children }) {
  return (
    <Button className={classNamesHandler("Tab", className)}>
      { children }
    </Button>
  )
}

export default Tab;