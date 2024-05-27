import "./Achievement.scss";
import Block from "../../Block/Block";

function Achievement({ icon, count, detail }) {
  return (
    <Block className={"Achievement"}>
      <i className="material-icons">{ icon }</i>
      <span className="counter">{ count }</span>
      <span className="detail">{ detail }</span>
    </Block>
  )
}

export default Achievement;