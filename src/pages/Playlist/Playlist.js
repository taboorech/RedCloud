import "./Playlist.scss";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import PlaylistBaner from "../../components/PlaylistBaner/PlaylistBaner";
import SongsList from "../../components/SongsList/SongsList";
import Button from "../../components/Button/Button";

function Playlist({ isOwner }) {

  const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const songsFill = () => (
    songs.map((song) => <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />)
  );

  return (
    <div className="Playlist">
      <DefaultPageContainer>
        <Block className={"playlist-controls-block"}>
          <PlaylistBaner isOwner={true} />
        </Block>
        <SongsList className={"playlist-songs scroll"}>
          { songs.length ? 
            songsFill() :
            <div className="empty-playlist">
              <p>Empty playlist</p>
              { isOwner && <Button className={"button white-button"}>Add song</Button>}
            </div>
          }
        </SongsList>
      </DefaultPageContainer>
    </div>
  )
}

export default Playlist;