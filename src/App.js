import Navigation from "./components/Navigation/Navigation";
import Player from "./components/Player/Player";
import PlaylistsBlock from "./components/PlaylistsBlock/PlaylistsBlock";
import Profile from "./components/Profile/Profile";
import CurentSongBlock from "./components/CurentSongBlock/CurentSongBlock";
import Baner from "./components/Baner/Baner";
import RecomendItem from "./components/Recomendations/RecomendItem/RecomendItem";
import Recomendations from "./components/Recomendations/Recomendations";

function App() {
  return (
    <div className="App">
      <PlaylistsBlock/>
      <Profile/>
      <Navigation/>
      <CurentSongBlock></CurentSongBlock>
      <Baner/>
      <RecomendItem/>
      <Recomendations/>
      <Player/>
    </div>
  );
}

export default App;