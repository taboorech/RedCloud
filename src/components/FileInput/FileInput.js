import "./FileInput.scss";

function FileInput({ value, onChange, buttonText }) {
  return (
    <div className="FileInput file-field input-field">
      <div className="btn">
        <span>{ buttonText }</span>
        <input type="file" onChange={onChange}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" value={value}/>
      </div>
    </div>
  )
}

export default FileInput;