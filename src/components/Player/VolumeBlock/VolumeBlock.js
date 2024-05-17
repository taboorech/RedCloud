import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useRef } from "react";
import "./VolumeBlock.scss";

function VolumeBlock({ audioPlayer }) {

  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const onProgressChange = (currentProgress) => {
    audioPlayer.volume = currentProgress / 100;
    localStorage.setItem("audioPlayerVolume", currentProgress / 100);
  };

  useEffect(() => {
    const localVolume = localStorage.getItem("audioPlayerVolume");
    let currentProgress;
    if(!!localVolume) {
      audioPlayer.volume = localVolume;
      currentProgress = localVolume * 100;
    } else {
      currentProgress = audioPlayer.volume / 100;
    }
    progressRef.current.style.width = currentProgress + "%";
    circleRef.current.style.left = currentProgress + "%";
  }, [audioPlayer]);

  return (
    <div className="Volume-block">
      <ProgressBar 
        audioPlayer={audioPlayer} 
        onProgressChange={onProgressChange} 
        progressBarRef={progressBarRef}
        progressRef={progressRef}
        circleRef={circleRef}
      />
    </div>
  )
}

export default VolumeBlock;