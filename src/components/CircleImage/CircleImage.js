import "./CircleImage.scss";

function CircleImage({ src, alt, className = "" }) {

  const classNames = [
    "Image",
    ...className.split(" ")
  ]

  return (
    <div className={classNames.join(" ")}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default CircleImage;