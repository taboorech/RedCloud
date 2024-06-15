import Recomendations from "../../components/Recomendations/Recomendations";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import Baner from "../../components/Baner/Baner";
import "./Home.scss";
import RecomendItem from "../../components/Recomendations/RecomendItem/RecomendItem";
import { useFetchRecommendationsQuery } from "../../redux";
import mainInstance from "../../api/mainInstance";

function Home({ audio }) {

  const { data } = useFetchRecommendationsQuery();
  const { setPlaylist } = audio;

  const fillSongs = () => {
    const songsOnClick = () => {
      setPlaylist([]);
    }
    return data.songs.map(song => 
      <RecomendItem 
        key={`song-${song._id}`} 
        title={song.title} 
        author={song.author} 
        imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
        songId={song._id}
        songUrl={mainInstance.defaults.baseURL + song.songUrl}
        audio={audio}
        onClick = {songsOnClick}
      />
    )
  }

  const fillPlaylists = () => (
    data.playlists.map(playlist => 
      <RecomendItem 
        key={`playlist-${playlist._id}`} 
        title={playlist.title} 
        author={playlist.author} 
        imageSrc={mainInstance.defaults.baseURL + playlist.imageUrl} 
        playlistId={playlist._id}
      />
    )
  )

  return (
    <div className="Home">
      <DefaultPageContainer audio={audio}>
        <Baner className={"baner"}/>
        <Recomendations title={"Songs"}>
          { !!data && fillSongs() }
        </Recomendations>
        <Recomendations title={"Playlists"}>
          { !!data && fillPlaylists() }
        </Recomendations>
      </DefaultPageContainer>
    </div>
  )
}

export default Home;