import "./List.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";
import { Children } from "react";

function List({ emptyText, className, children }) {
  return (
    <Block className={classNamesHandler("List", className)}>
      { !!Children.count(children) ? children : <h4 className="empty">{emptyText || "Not Found"}</h4>}
    </Block>
  )
}

export default List;