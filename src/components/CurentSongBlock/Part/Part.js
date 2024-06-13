import Image from "../../Image/Image";
import CircleButton from "../../CircleButton/CircleButton";
import { classNamesHandler } from "../../../utils/classNamesHandler";
import "./Part.scss";

function Part({ className, imageSrc, imageAlt, innerRef, children, closeButtonClickHandler }) {

  return (
    <div ref={innerRef} className={classNamesHandler("Part", className)}>
      {!!imageSrc &&
        <div className={"image"}>
          <Image src={imageSrc} alt={imageAlt} />
        </div>
      }
      <div className="close-button-block">
        <CircleButton className="white-button waves-effect waves-dark" onClick={(event) => closeButtonClickHandler(event)}>
          <i className="material-icons">chevron_right</i>
        </CircleButton>
      </div>
      { children }
    </div>
  )
}

export default Part;