import Recomendations from "../../components/Recomendations/Recomendations";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import Baner from "../../components/Baner/Baner";
import "./Home.scss";
import RecomendItem from "../../components/Recomendations/RecomendItem/RecomendItem";
import { useFetchRecommendationsQuery } from "../../redux";
import mainInstance from "../../api/mainInstance";

function Home({ audio }) {

  const { data } = useFetchRecommendationsQuery();

  const fillSongs = () => (
    data.songs.map(song => <RecomendItem title={song.title} author={song.author} imageSrc={mainInstance.defaults.baseURL + song.imageUrl} />)
  )

  const fillPlaylists = () => (
    data.playlists.map(playlist => <RecomendItem title={playlist.title} author={playlist.author} imageSrc={mainInstance.defaults.baseURL + playlist.imageUrl} />)
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