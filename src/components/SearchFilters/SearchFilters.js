import "./SearchFilters.scss";
import SearchFilter from "./SearchFilter/SearchFilter";
import { classNamesHandler } from "../../utils/classNamesHandler";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../../redux";

function SearchFilters({ className }) {

  const filters = ["All", "Songs", "Authors", "Profile", "Albums", "Podcasts", "Playlists"];
  const activeFilter = useSelector((state) => state.searchFilter.activeFilter);
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