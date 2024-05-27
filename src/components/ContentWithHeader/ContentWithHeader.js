import { classNamesHandler } from "../../utils/classNamesHandler";
import "./ContentWithHeader.scss";

function ContentWithHeader({ header, className, children }) {
  return (
    <div className={classNamesHandler("Content-with-header", className)}>
      <div className="header">
        { header }
      </div>
      <div className="content">
        { children }
      </div>
    </div>
  )
}

export default ContentWithHeader