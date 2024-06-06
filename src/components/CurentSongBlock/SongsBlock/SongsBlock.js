import "./SongsBlock.scss";
import CircleButton from "../../CircleButton/CircleButton";

function SongsBlock({ children }) {
  return (
    <div className="Songs-block">
      <div className="songs-block-title">
        <p>Next song</p>
        <CircleButton className="black-button without-shadow waves-effect waves-light white-border more-button">
          <i className="material-icons">more_horiz</i>
        </CircleButton>
      </div>
      <div className="songs without-scrollbar">
        <div className="line">
          { children }
        </div>
      </div>
    </div>
  )
}

export default SongsBlock;