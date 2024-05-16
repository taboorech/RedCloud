import { useRef } from "react";
import "./ProgressBar.scss";

function ProgressBar({ audioPlayer }) {

  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const progressBarClickHandler = (event) => {
    const calculateFunction = (event) => {
      let currentProgress = ((event.clientX - progressBarRef.current.offsetLeft) * 100) / progressBarRef.current.offsetWidth;
      if(currentProgress > 100) {
        currentProgress = 100;
      }
      if(currentProgress < 0) {
        currentProgress = 0;
      }

      progressRef.current.style.width = currentProgress + "%";
      circleRef.current.style.left = currentProgress + "%";
      
      return currentProgress;
    }
    
    let currentProgress = calculateFunction(event);
    const initialPaused = audioPlayer.paused;
    if(!initialPaused) {
      audioPlayer.pause();
    }
    audioPlayer.currentTime = (currentProgress / 100) * audioPlayer.duration;
    // this.currentTime.innerHTML = this.calculateTime(this.audioSettings.currentTime);
    window.onmousemove = (event) => {
      currentProgress = calculateFunction(event);
      audioPlayer.currentTime = (currentProgress / 100) * audioPlayer.duration;
      // this.currentTime.innerHTML = this.calculateTime(this.audioSettings.currentTime);
    }
    window.onmouseup = () => {
      window.onmousemove = null;
      if(!initialPaused) {
        audioPlayer.play();
      }
    }
  }

  return (
    <div className="Progress-bar" ref={progressBarRef} onMouseDown={(event) => progressBarClickHandler(event)}>
      <div className="progress" ref={progressRef}></div>
      <div className="circle" ref={circleRef}></div>
    </div>
  )
}

export default ProgressBar;