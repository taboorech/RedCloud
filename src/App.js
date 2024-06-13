import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Playlist from "./pages/Playlist/Playlist";
import Search from "./pages/Search/Search";
import Lyrics from "./pages/Lyrics/Lyrics";
import Auth from "./pages/Auth/Auth";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Settings from "./pages/Settings/Settings";
import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import useAudio from "./hooks/use-audio";

function App() {

  const audio = useAudio();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home audio={audio} />}></Route>
        <Route path="/playlist/:id" element={<Playlist audio={audio}/>}></Route>
        <Route path="/search" element={<Search audio={audio}/>}></Route>
        <Route path="/lyrics" element={<Lyrics audio={audio}/>}></Route>
        <Route path="/about" element={<About audio={audio}/>}></Route>
        <Route path="/profile" element={<ProfilePage audio={audio}/>}></Route>
        <Route path="/profile/:id" element={<ProfilePage audio={audio}/>}></Route>
        <Route path="/profile/settings" element={<ProfileSettings audio={audio}/>}></Route>
        <Route path="/settings" element={<Settings audio={audio}/>}></Route>
        <Route path="/auth" element={<Auth/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
