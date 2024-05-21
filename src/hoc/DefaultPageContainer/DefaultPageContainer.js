import "./DefaultPageContainer.scss";
import CurentSongBlock from "../../components/CurentSongBlock/CurentSongBlock";
import Navigation from "../../components/Navigation/Navigation";
import Player from "../../components/Player/Player";
import PlaylistsBlock from "../../components/PlaylistsBlock/PlaylistsBlock";
import Profile from "../../components/Profile/Profile";

function DefaultPageContainer({ children }) {

  return (
    <div className="Default-page-container">
      <div className="left-side-block">
        <Profile className={"profile"}/>
        <Navigation className={"navigation"}/>
      </div>
      <div className="center-block">
        <PlaylistsBlock/>
        <div className="middle without-scrollbar">
          { children }
        </div>
        <Player className={"player"} />
      </div>
      <div className="right-side-block close">
        <CurentSongBlock className={"current-song-block"}/>
      </div>
    </div>
  )
}

export default DefaultPageContainer;