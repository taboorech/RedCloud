import "./ProgressBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Time from "../Time/Time";
import { useEffect, useState } from "react";

function ProgressBlock({ audioPlayer }) {

  const [currentTime, setCurrentTime] = useState(audioPlayer.currentTime);

  useEffect(() => {
    audioPlayer.addEventListener("timeupdate", (event) => {
      setCurrentTime(audioPlayer.currentTime)
    });
  }, [audioPlayer]);

  return (
    <div className="Progress-block">
      <Time className="current-time" time={currentTime}/>
      <div className="line">
        <ProgressBar audioPlayer = {audioPlayer} />
      </div>
      <Time className="duration-time" time={audioPlayer.duration} />
    </div>
  )
}

export default ProgressBlock;