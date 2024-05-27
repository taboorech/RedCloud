import "./AchievementsBlock.scss";
import Achievement from "./Achievement/Achievement";
import { classNamesHandler } from "../../utils/classNamesHandler";

function AchievementsBlock({ className }) {
  return (
    <div className={classNamesHandler("Achievements-block", className)}>
      <Achievement/>
      <Achievement/>
      <Achievement/>
      <Achievement/>
    </div>
  )
}

export default AchievementsBlock;