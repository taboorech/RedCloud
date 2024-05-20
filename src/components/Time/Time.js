import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Time.scss";

function Time({ className, time }) {

  const calculateTime = () => {
    let minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60);
    let seconds = (time % 60).toFixed();
    if(seconds >= 60) {
      seconds = 0;
      minutes = minutes + 1;
    }
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }

  return (
    <div className={classNamesHandler("Time", className)}>
      {calculateTime(time)}
    </div>
  )
}

export default Time;