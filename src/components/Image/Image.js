import "./Image.scss";

function Image({ alt, src }) {
  return (
    <img alt={alt} src={src} className="Image"/>
  )
}

export default Image;