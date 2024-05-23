import SearchBar from "../../components/SearchBar/SearchBar";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";

function Search() {
  return (
    <div className="Search">
      <DefaultPageContainer>
        <SearchBar/>
      </DefaultPageContainer>
    </div>
  )
}

export default Search;