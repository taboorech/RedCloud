import "./SearchFilters.scss";
import SearchFilter from "./SearchFilter/SearchFilter";
import { classNamesHandler } from "../../utils/classNamesHandler";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../../redux";

function SearchFilters({ className }) {

  const {filters, activeFilter} = useSelector((state) => state.searchFilter);
  const dispatch = useDispatch();

  const filterClickHandler = (index) => {
    dispatch(setActiveFilter(index));
  };

  const searchFiltersFill = () => (
    filters.map((filter, index) => <SearchFilter className={classNamesHandler("filter", index === activeFilter ? "active" : "")} key={`filter-${index}`} onClick={() => filterClickHandler(index)}>{ filter }</SearchFilter>)
  )

  return (
    <div className={classNamesHandler("SearchFilters", className)}>
      { searchFiltersFill() }
    </div>
  )
}

export default SearchFilters;