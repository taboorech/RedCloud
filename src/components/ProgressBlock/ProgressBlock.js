import "./ProgressBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Time from "../Time/Time";

function ProgressBlock({ audioPlayer }) {
  return (
    <div className="Progress-block">
      <Time className="current-time" time={audioPlayer.currentTime}/>
      <div className="line">
        <ProgressBar audioPlayer = {audioPlayer} />
      </div>
      <Time className="duration-time" time={audioPlayer.duration} />
    </div>
  )
}

export default ProgressBlock;