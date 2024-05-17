import "./ProgressBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Time from "../../Time/Time";
import { useEffect, useState, useRef } from "react";

function ProgressBlock({ audioPlayer }) {

  const [currentTime, setCurrentTime] = useState(audioPlayer.currentTime);
  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const onProgressChange = (currentProgress) => {
    audioPlayer.currentTime = (currentProgress / 100) * audioPlayer.duration;
  }

  const onProgressMouseDown = (currentProgress) => {
    if(!audioPlayer.paused) {
      audioPlayer.pause();
    }
    onProgressChange(currentProgress);
  };

  const onProgressMouseUp = (currentProgress) => {
    audioPlayer.play();
  }

  useEffect(() => {
    audioPlayer.addEventListener("timeupdate", (event) => {
      setCurrentTime(audioPlayer.currentTime);
      let currentProgress = audioPlayer.currentTime * 100 / audioPlayer.duration;
      progressRef.current.style.width = currentProgress + "%";
      circleRef.current.style.left = currentProgress + "%";
    });
  }, [audioPlayer]);

  return (
    <div className="Progress-block">
      <Time className="current-time" time={currentTime}/>
      <div className="line">
        <ProgressBar 
          onProgressMouseDown={onProgressMouseDown} 
          onProgressChange={onProgressChange} 
          onProgressMouseUp={onProgressMouseUp} 
          progressBarRef={progressBarRef}
          progressRef={progressRef}
          circleRef={circleRef}
        />
      </div>
      <Time className="duration-time" time={audioPlayer.duration} />
    </div>
  )
}

export default ProgressBlock;