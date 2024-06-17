import { useCallback, useEffect, useRef } from "react";
import "./ContextMenu.scss";
import Backdrop from "../Backdrop/Backdrop";

function ContextMenu({ button, children }) {

  const contextMenuRef = useRef();

  const onBackdropClickHandler = () => {
    contextMenuRef.current.classList.add("close");
  }

  const buttonOnClick = useCallback((event) => {
    event.preventDefault();
    contextMenuRef.current.classList.remove("close");
    contextMenuRef.current.style.left = button.current.offsetLeft - (contextMenuRef.current.offsetWidth / 2) + "px";
    contextMenuRef.current.style.top = button.current.offsetTop + button.current.offsetHeight + 10 + "px";
  }, [button]);

  useEffect(() => {
    if(!button.current) {
      return;
    }
    button.current.onclick = buttonOnClick;
    button.current.oncontextmenu = buttonOnClick;
  }, [button, buttonOnClick]);

  return (
    <div className="Context-menu close" ref={contextMenuRef}>
      { children }
      <Backdrop className={"background"} onClick={onBackdropClickHandler} />
    </div>
  )
}

export default ContextMenu;