import "./Tab.scss";
import Button from "../../Button/Button";
import { classNamesHandler } from "../../../utils/classNamesHandler";

function Tab({ className, onClick, children, ...props }) {
  return (
    <Button {...props} className={classNamesHandler("Tab", className)} onClick={onClick}>
      { children }
    </Button>
  )
}

export default Tab;