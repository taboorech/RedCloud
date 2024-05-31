import "./ProgressBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Time from "../../Time/Time";
import { useEffect, useRef } from "react";

function ProgressBlock({ audio}) {

  const { playing, pause, play, currentTimeChange, currentTime, duration } = audio;

  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const onProgressChange = (currentProgress) => {
    currentTimeChange((currentProgress / 100) * duration);
  }

  const onProgressMouseDown = (currentProgress) => {
    if(playing) {
      pause();
    }
    onProgressChange(currentProgress);
  };

  const onProgressMouseUp = (currentProgress) => {
    play();
  }
  
  useEffect(() => {
    let currentProgress = currentTime * 100 / duration;
    progressRef.current.style.width = currentProgress + "%";
    circleRef.current.style.left = currentProgress + "%";
  }, [currentTime, duration]);

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
      <Time className="duration-time" time={duration} />
    </div>
  )
}

export default ProgressBlock;