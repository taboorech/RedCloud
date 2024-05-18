import ProgressBar from "../ProgressBar/ProgressBar";
import CircleButton from "../../CircleButton/CircleButton";
import { useEffect, useRef, useState } from "react";
import "./VolumeBlock.scss";
import { classNamesHandler } from "../../../utils/classNamesHandler";

function VolumeBlock({ audioPlayer, className }) {

  const [isMuted, setIsMuted] = useState(localStorage.getItem("audioPlayerMuted") === "true" || audioPlayer.muted);

  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const changeProgress = (currentProgress) => {
    progressRef.current.style.width = currentProgress + "%";
    circleRef.current.style.left = currentProgress + "%";
  }

  const onProgressChange = (currentProgress) => {
    if(isMuted) {
      setIsMuted(false);
      audioPlayer.muted = false;
    }
    audioPlayer.volume = currentProgress / 100;
    localStorage.setItem("audioPlayerVolume", currentProgress / 100);
  };

  const muteButtonClickHandler = () => {
    setIsMuted(!isMuted);
    if(!isMuted) {
      changeProgress(0);
    } else {
      changeProgress(audioPlayer.volume * 100);
    }
    audioPlayer.muted = !isMuted;
    localStorage.setItem("audioPlayerMuted", !isMuted);
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

    changeProgress(currentProgress);
  }, [audioPlayer]);

  useEffect(() => {
    if(isMuted) {
      changeProgress(0);
    } else {
      changeProgress(audioPlayer.volume * 100);
    }
    audioPlayer.muted = isMuted;
  }, [audioPlayer, isMuted]);

  return (
    <div className={classNamesHandler("Volume-block", className)}>
      <CircleButton className={"btn-small waves-effect waves-light black-button mute-button"} onClick={muteButtonClickHandler}>
        <i className="material-icons">{!isMuted ? "volume_up" : "volume_off"}</i>
      </CircleButton>
      <div className="line">
        <ProgressBar 
          audioPlayer={audioPlayer} 
          onProgressChange={onProgressChange} 
          progressBarRef={progressBarRef}
          progressRef={progressRef}
          circleRef={circleRef}
        />
      </div>
    </div>
  )
}

export default VolumeBlock;