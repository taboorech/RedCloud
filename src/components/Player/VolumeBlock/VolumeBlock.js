import "./VolumeBlock.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import CircleButton from "../../CircleButton/CircleButton";
import { useEffect, useRef } from "react";
import { classNamesHandler } from "../../../utils/classNamesHandler";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsMuted } from "../../../redux";

function VolumeBlock({ audio, className }) {

  // const isMuted = useSelector((state) => state.audioPlayer.isMuted);
  // const dispatch = useDispatch();

  const { isMuted, volume, setIsMuted, setVolume } = audio;

  const progressBarRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  const changeProgress = (currentProgress) => {
    progressRef.current.style.width = currentProgress + "%";
    circleRef.current.style.left = currentProgress + "%";
  }

  const onProgressChange = (currentProgress) => {
    if(isMuted) {
      setIsMuted(false)
    }
    setVolume(currentProgress / 100);
    localStorage.setItem("audioPlayerVolume", currentProgress / 100);
  };

  const muteButtonClickHandler = () => {
    setIsMuted(!isMuted);
    if(!isMuted) {
      changeProgress(0);
    } else {
      changeProgress(volume * 100);
    }
    localStorage.setItem("audioPlayerMuted", !isMuted);
  };

  useEffect(() => {
    const localVolume = localStorage.getItem("audioPlayerVolume");
    let currentProgress;
    if(!!localVolume) {
      setVolume(localVolume);
      currentProgress = localVolume * 100;
    } else {
      currentProgress = volume / 100;
    }

    changeProgress(currentProgress);
  }, [volume, setVolume]);

  useEffect(() => {
    if(isMuted) {
      changeProgress(0);
    } else {
      changeProgress(volume * 100);
    }
    setIsMuted(isMuted);
  }, [isMuted, setIsMuted, volume]);

  return (
    <div className={classNamesHandler("Volume-block", className)}>
      <CircleButton className={"btn-small waves-effect waves-light black-button mute-button"} onClick={muteButtonClickHandler}>
        <i className="material-icons">{!isMuted ? "volume_up" : "volume_off"}</i>
      </CircleButton>
      <div className="line">
        <ProgressBar 
          audio={audio} 
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