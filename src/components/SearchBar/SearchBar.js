import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.scss";
import { changeSearchBarValue } from "../../redux";

function SearchBar({ sendRequest }) {

  const value = useSelector((state) => state.searchBar.value);
  const dispatch = useDispatch();

  const onSearchClickHandler = () => {
    console.log("Search...", value);
    sendRequest(value);
  }

  const onInputChangeHandler = (event) => {
    dispatch(changeSearchBarValue(event.target.value));
  };

  return (
    <div className="Search-bar">
      <div className="icon-block" onClick={onSearchClickHandler}>
        <i className="material-icons">search</i>
      </div>
      <div className="input-block">
        <input value={value} placeholder="Search request" onChange={(event) => onInputChangeHandler(event)}/>
      </div>
    </div>
  )
}

export default SearchBar;