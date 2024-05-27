import "./Achievement.scss";
import Block from "../../Block/Block";

function Achievement() {
  return (
    <Block className={"Achievement"}>
      <i className="material-icons">home</i>
      <span className="counter">20</span>
      <span className="detail">Songs</span>
    </Block>
  )
}

export default Achievement;