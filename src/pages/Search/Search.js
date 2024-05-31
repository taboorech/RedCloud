import "./Search.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import SongsList from "../../components/SongsList/SongsList";
import AuthorsBlock from "../../components/AuthorsBlock/AuthorsBlock";
import { useSelector } from "react-redux";

function Search({ audio }) {

  const { filters, activeFilter } = useSelector((state) => state.searchFilter);

  const generateContent = () => {
    switch(filters[activeFilter]) {
      case "Songs":
      case "Podcasts":
      case "Playlists":
        return (
          <>
            <SongsList className={"playlist-songs full scroll"}>
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
            </SongsList>
          </>
        )
      case "Authors":
      case "Profile":
        return (
          <AuthorsBlock className={"authors-block full"} authors={[{name: "Name1"}, {name: "Name2"}, {name: "Name3"}, {name: "Name4"}, {name: "Name1"}, {name: "Name1"}]}/>
        )
      case "All":
      default:
        return (
          <>
            <AuthorsBlock className={"authors-block small"} authors={[{name: "Name1"}, {name: "Name2"}, {name: "Name3"}, {name: "Name4"}, {name: "Name1"}, {name: "Name1"}]}/>
            <SongsList className={"playlist-songs scroll"}>
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
            </SongsList>
          </>
        )
    }
  };

  return (
    <div className="Search">
      <DefaultPageContainer audio={audio}>
        <SearchBar/>
        <SearchFilters className={"search-filters-block"} />
        { generateContent() }
      </DefaultPageContainer>
    </div>
  )
}

export default Search;