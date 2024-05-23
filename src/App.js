import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Playlist from "./pages/Playlist/Playlist";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/playlist/:id" element={<Playlist/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
