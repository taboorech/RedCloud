import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.scss";
import { changeSearchBarValue } from "../../redux";

function SearchBar({ sendRequest }) {

  const value = useSelector((state) => state.searchBar.value);
  const dispatch = useDispatch();

  const onSearchClickHandler = () => {
    if(!value.trim()) {
      return;
    }
    sendRequest(value);
  }

  const onInputChangeHandler = (event) => {
    dispatch(changeSearchBarValue(event.target.value));
  };

  const onKeyDownHandler = (event) => {
    if(event.key === "Enter") {
      onSearchClickHandler();
    }
  }

  return (
    <div className="Search-bar">
      <div className="icon-block" onClick={onSearchClickHandler}>
        <i className="material-icons">search</i>
      </div>
      <div className="input-block">
        <input value={value} placeholder="Search request" onChange={(event) => onInputChangeHandler(event)} onKeyDown={onKeyDownHandler}/>
      </div>
    </div>
  )
}

export default SearchBar;