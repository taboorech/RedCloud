import "./Playlist.scss";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import PlaylistBaner from "../../components/PlaylistBaner/PlaylistBaner";
import SongsList from "../../components/SongsList/SongsList";
import Button from "../../components/Button/Button";
import { useFetchOnePlaylistQuery } from "../../redux";
import { useParams } from "react-router-dom";
import mainInstance from "../../api/mainInstance";

function Playlist({ audio }) {

  const params = useParams();
  const { data } = useFetchOnePlaylistQuery(params.id);

  const songs = data ? data.playlist?.songs : [];

  const songsFill = () => (
    songs.map((song, index) => 
      <SongExpansive key={`song-${index}`} title={song.title} secondaryInfo={song.album} duration={song.duration} imageSrc={mainInstance.defaults.baseURL + song.imageUrl} />
    )
  );  

  return (
    <div className="Playlist">
      <DefaultPageContainer audio={audio}>
        <Block className={"playlist-controls-block"}>
          <PlaylistBaner 
            title = {data && data.playlist.title} 
            songsCount={songs.length} 
            duration={data && data.playlist.duration} 
            isPrivate = {data && data.playlist.private} 
            imageSource={data && mainInstance.defaults.baseURL + data.playlist.imageUrl} 
            isOwner={data && data.isOwner} 
          />
        </Block>
        <SongsList className={"playlist-songs scroll"}>
          { songs.length ? 
            songsFill() :
            <div className="empty-playlist">
              <p>Empty playlist</p>
              { (data && data.isOwner) && <Button className={"button white-button"}>Add song</Button>}
            </div>
          }
        </SongsList>
      </DefaultPageContainer>
    </div>
  )
}

export default Playlist;