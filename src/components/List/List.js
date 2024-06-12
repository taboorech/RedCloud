import "./List.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";

function List({ className, children }) {
  return (
    <Block className={classNamesHandler("List", className)}>
      { children }
    </Block>
  )
}

export default List;