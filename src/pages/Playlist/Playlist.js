import "./Playlist.scss";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import PlaylistBaner from "../../components/PlaylistBaner/PlaylistBaner";
import SongsList from "../../components/SongsList/SongsList";

function Playlist() {
  return (
    <div className="Playlist">
      <DefaultPageContainer>
        <Block className={"playlist-controls-block"}>
          <PlaylistBaner isOwner={true} />
        </Block>
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

export default Playlist;