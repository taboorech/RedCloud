import "./FileInput.scss";

function FileInput({ buttonText }) {
  return (
    <div className="FileInput file-field input-field">
      <div className="btn">
        <span>{ buttonText }</span>
        <input type="file" />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
  )
}

export default FileInput;