import { Link, NavLink } from "react-router-dom";
import { classNamesHandler } from "../../utils/classNamesHandler";
import "./CircleButton.scss";

function CircleButton({ dataTarget, className = "", to, isLink, isNavLink, title, children, onClick, innerRef }) {

  let content;

  if(isLink) {
    content = <Link to={to} title={title} onClick={onClick} className={classNamesHandler("Circle-button btn-floating", className)} ref={innerRef}>{ children }</Link>
  } else if(isNavLink) {
    content = <NavLink to={to} title={title} onClick={onClick} className={classNamesHandler("Circle-button btn-floating", className)} ref={innerRef}>{ children }</NavLink>
  } else {
    content = <button className={classNamesHandler("Circle-button btn-floating", className)} onClick={onClick} title={title} data-target={dataTarget} ref={innerRef}>{children}</button>
  }

  return (
    <>
      {content}
    </>
  )
}

export default CircleButton;