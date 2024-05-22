import "./Collection.scss";

function Collection({ children }) {
  return (
    <ul className="Collection collection">
      { children }
    </ul>
  )
}

export default Collection;