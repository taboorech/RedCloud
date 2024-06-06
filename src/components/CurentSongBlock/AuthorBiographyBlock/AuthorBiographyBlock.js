import "./AuthorBiographyBlock.scss";

function AuthorBiographyBlock({ children }) {
  return (
    <div className="Author-biography-block without-scrollbar">
      <p>
        { children }
      </p>
    </div>
  )
}

export default AuthorBiographyBlock;