import Navigation from "./components/Navigation/Navigation";
import Player from "./components/Player/Player";
import PlaylistsBlock from "./components/PlaylistsBlock/PlaylistsBlock";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <PlaylistsBlock/>
      <Profile/>
      <Navigation/>
      <Player/>
    </div>
  );
}

export default App;
