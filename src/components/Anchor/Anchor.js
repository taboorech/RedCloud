import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Anchor.scss";
import { Link } from "react-router-dom";

function Anchor({ href, className, children }) {
  return (
    <Link to={href} className={classNamesHandler("Anchor", className)}>
      { children }
    </Link>
  )
}

export default Anchor;