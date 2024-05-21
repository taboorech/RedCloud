import { classNamesHandler } from "../../../utils/classNamesHandler"
import "./RecomendItem.scss"
function RecomendItem({ className }) {
  return (
    <div className={classNamesHandler("RecomendItem", className)}>
      <div className="image">
        <img src={"./images/Song.png"} alt="PlayList" />
      </div>
      <div className="head-line">
        <h5>Name</h5>
      </div>
      <div className="sub-heading">
        <p>Author</p>
      </div>
    </div>
  )
}

export default RecomendItem; 