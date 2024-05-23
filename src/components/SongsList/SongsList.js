import "./SongsList.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";

function SongsList({ className, children }) {
  return (
    <Block className={classNamesHandler("Songs-list", className)}>
      { children }
    </Block>
  )
}

export default SongsList;