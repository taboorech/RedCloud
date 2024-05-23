import "./Search.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import SongsList from "../../components/SongsList/SongsList";
import AuthorsBlock from "../../components/AuthorsBlock/AuthorsBlock";

function Search() {
  return (
    <div className="Search">
      <DefaultPageContainer>
        <SearchBar/>
        <SearchFilters className={"search-filters-block"} />
        <AuthorsBlock className={"authors-block"}/>
        <SongsList className={"playlist-songs scroll"}>
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
          <SongExpansive title={"Song title"} album={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
        </SongsList>
      </DefaultPageContainer>
    </div>
  )
}

export default Search;