import { classNamesHandler } from "../../utils/classNamesHandler";
import "./CircleImage.scss";

function CircleImage({ src, alt, className = "" }) {

  return (
    <div className={classNamesHandler("Image", className)}>
      <img src={src} alt={alt} className="responsive-img"/>
    </div>
  )
}

export default CircleImage;