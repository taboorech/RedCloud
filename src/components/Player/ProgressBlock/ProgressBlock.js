import "./ProgressBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Time from "../../Time/Time";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime } from "../../../redux";

function ProgressBlock({ audioPlayer }) {

  const currentTime = useSelector((state) => state.audioPlayer.currentTime);
  const dispatch = useDispatch();

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
      dispatch(setCurrentTime(audioPlayer.currentTime));
      let currentProgress = audioPlayer.currentTime * 100 / audioPlayer.duration;
      progressRef.current.style.width = currentProgress + "%";
      circleRef.current.style.left = currentProgress + "%";
    });
  }, [audioPlayer, dispatch]);

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