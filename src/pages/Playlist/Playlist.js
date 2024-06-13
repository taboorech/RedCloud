import "./Playlist.scss";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import PlaylistBaner from "../../components/PlaylistBaner/PlaylistBaner";
import SongsList from "../../components/List/List";
import Button from "../../components/Button/Button";
import { useFetchOnePlaylistQuery } from "../../redux";
import { useParams } from "react-router-dom";
import mainInstance from "../../api/mainInstance";

function Playlist({ audio }) {

  const { setPlaylist, setSource, setSongId, currentTimeChange } = audio;
  const params = useParams();
  const { data } = useFetchOnePlaylistQuery(params.id);

  const songs = data ? data.playlist?.songs : [];

  const songClickHandler = () => {
    setPlaylist(songs);
    localStorage.setItem("currentPlaylist", JSON.stringify(songs));
  }

  const playButtonClickHandler = () => {
    setPlaylist(songs);
    localStorage.setItem("currentPlaylist", JSON.stringify(songs));
    setSource(mainInstance.defaults.baseURL + songs[0].songUrl);
    setSongId(songs[0]._id);
    currentTimeChange(0);
  }

  const songsFill = () => (
    songs.map((song, index) => 
      <SongExpansive 
        key={`song-${index}`} 
        title={song.title} 
        secondaryInfo={song.album} 
        duration={song.duration} 
        songId = {song._id}
        songUrl={mainInstance.defaults.baseURL + song.songUrl} 
        imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
        onClick={songClickHandler}
        audio = { audio }
      />
    )
  );

  return (
    <div className="Playlist">
      <DefaultPageContainer audio={audio}>
        <Block className={"playlist-controls-block"}>
          <PlaylistBaner 
            title = {data && data.playlist.title} 
            songsCount={songs?.length} 
            duration={data && data.playlist.duration} 
            isPrivate = {data && data.playlist.private} 
            imageSource={data && mainInstance.defaults.baseURL + data.playlist.imageUrl} 
            isOwner={data && data.isOwner} 
            playButtonClickHandler={playButtonClickHandler}
          />
        </Block>
        <SongsList className={"playlist-songs scroll"}>
          { songs?.length ? 
            songsFill() :
            <div className="empty-playlist">
              <p>Empty playlist</p>
              { (data && data.isOwner) && <Button isLink={true} to={"/search"} className={"button white-button"}>Add song</Button>}
            </div>
          }
        </SongsList>
      </DefaultPageContainer>
    </div>
  )
}

export default Playlist;