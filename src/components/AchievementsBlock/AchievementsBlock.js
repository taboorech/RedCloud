import "./AchievementsBlock.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";

function AchievementsBlock({ children, className }) {
  return (
    <div className={classNamesHandler("Achievements-block", className)}>
      { children }
    </div>
  )
}

export default AchievementsBlock;