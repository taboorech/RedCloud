import "./Button.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import { Link, NavLink } from "react-router-dom";

function Button({ to, isLink, isNavLink, className, type, onClick, children }) {

  let content;
  if(isLink) {
    content = <Link to={to} className={classNamesHandler("Button btn", className)} type={type} onClick={onClick}>{ children }</Link>
  } else if(isNavLink) {
    content = <NavLink to={to} className={classNamesHandler("Button btn", className)} type={type} onClick={onClick}>{ children }</NavLink>
  } else {
    content = <button className={classNamesHandler("Button btn", className)} type={type} onClick={onClick}>{ children }</button>
  }

  return (
    <>
      { content } 
    </>
  )
}

export default Button;