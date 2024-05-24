import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Block.scss";

function Block({ className, innerRef, children }) {
  return (
    <div className={classNamesHandler("Block without-scrollbar", className)} ref={innerRef}>
      { children }
    </div>
  )
}

export default Block;