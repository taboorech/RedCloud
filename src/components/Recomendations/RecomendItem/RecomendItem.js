import { classNamesHandler } from "../../../utils/classNamesHandler"
import Button from "../../Button/Button";
import "./RecomendItem.scss"
function RecomendItem({ title, author, playlistId, imageSrc, className, onClick, songUrl, songId, audio }) {

  const clickHandler = () => {
    onClick && onClick();
    audio.setSource(songUrl);
    audio.setSongId(songId)
  }

  return (
    <Button isLink={!!playlistId} to={!!playlistId && `/playlist/${playlistId}`} className={classNamesHandler("RecomendItem", className)} onClick={songId && clickHandler}>
      <div className="image">
        <img src={imageSrc} alt="PlayList" />
      </div>
      <div className="head-line">
        <h5>{ title }</h5>
      </div>
      <div className="sub-heading">
        <p>{ author }</p>
      </div>
    </Button>
  )
}

export default RecomendItem; 