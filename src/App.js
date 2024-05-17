import Navigation from "./components/Navigation/Navigation";
import Player from "./components/Player/Player";
import PlaylistsBlock from "./components/PlaylistsBlock/PlaylistsBlock";
import Profile from "./components/Profile/Profile";
import CurentSongBlock from "./components/CurentSongBlock/CurentSongBlock";

function App() {
  return (
    <div className="App">
      <PlaylistsBlock/>
      <Profile/>
      <Navigation/>
      <CurentSongBlock></CurentSongBlock>
      <Player/>
    </div>
  );
}

export default App;
