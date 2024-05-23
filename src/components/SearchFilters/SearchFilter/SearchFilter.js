import { classNamesHandler } from "../../../utils/classNamesHandler";
import "./SearchFilter.scss";

function SearchFilter({ className, onClick, children }) {
  return (
    <div className={classNamesHandler("SearchFilter", className)} onClick={onClick}>
      { children }
    </div>
  )
}

export default SearchFilter;