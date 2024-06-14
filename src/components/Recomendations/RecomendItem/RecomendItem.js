import { classNamesHandler } from "../../../utils/classNamesHandler"
import "./RecomendItem.scss"
function RecomendItem({ title, author, imageSrc, className }) {
  return (
    <div className={classNamesHandler("RecomendItem", className)}>
      <div className="image">
        <img src={imageSrc} alt="PlayList" />
      </div>
      <div className="head-line">
        <h5>{ title }</h5>
      </div>
      <div className="sub-heading">
        <p>{ author }</p>
      </div>
    </div>
  )
}

export default RecomendItem; 