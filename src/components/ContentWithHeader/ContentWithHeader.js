import "./ContentWithHeader.scss";

function ContentWithHeader({ header, children }) {
  return (
    <div className="Content-with-header">
      <div className="header">
        { header }
      </div>
      <div className="content">
        { children }
      </div>
    </div>
  )
}

export default ContentWithHeader