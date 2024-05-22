import "./Block.scss";

function Block({ children }) {
  return (
    <div className="Block without-scrollbar">
      { children }
    </div>
  )
}

export default Block;