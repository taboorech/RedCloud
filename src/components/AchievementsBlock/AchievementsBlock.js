import "./AchievementsBlock.scss";
import Achievement from "./Achievement/Achievement";
import { classNamesHandler } from "../../utils/classNamesHandler";

function AchievementsBlock({ className }) {
  return (
    <div className={classNamesHandler("Achievements-block", className)}>
      <Achievement icon={"music_note"} detail={"Songs listened"} count={"20"}/>
      <Achievement icon={"search"} detail={"Songs found"} count={"101"}/>
      <Achievement icon={"favorite"} detail={"Songs liked"} count={"20"}/>
      <Achievement icon={"queue_music"} detail={"Playlists created"} count={"20"}/>
    </div>
  )
}

export default AchievementsBlock;