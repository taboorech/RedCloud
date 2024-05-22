import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Block.scss";

function Block({ className, children }) {
  return (
    <div className={classNamesHandler("Block without-scrollbar", className)}>
      { children }
    </div>
  )
}

export default Block;