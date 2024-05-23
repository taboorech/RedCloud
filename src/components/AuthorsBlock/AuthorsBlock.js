import "./AuthorsBlock.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";
import Person from "../Person/Person";

function AuthorsBlock({ className }) {
  return (
    <Block className={classNamesHandler("Authors-block", className)}>
      <Person username={"Kainless"} />
      <Person username={"Kainless"} />
      <Person username={"Kainless"} />
      <Person username={"Kainless"} />
      <Person username={"Kainless"} />
    </Block>
  )
}

export default AuthorsBlock;