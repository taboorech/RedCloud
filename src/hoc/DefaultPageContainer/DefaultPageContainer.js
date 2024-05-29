import "./DefaultPageContainer.scss";
import CurentSongBlock from "../../components/CurentSongBlock/CurentSongBlock";
import Navigation from "../../components/Navigation/Navigation";
import Player from "../../components/Player/Player";
import PlaylistsBlock from "../../components/PlaylistsBlock/PlaylistsBlock";
import Profile from "../../components/Profile/Profile";
import CircleButton from "../../components/CircleButton/CircleButton";
import { useRef } from "react";

function DefaultPageContainer({ children }) {

  const containerRef = useRef();
  const rightBlockRef = useRef();

  const closeButtonClickHandler = (event) => {
    containerRef.current.classList.toggle("expanded-center");
    rightBlockRef.current.classList.toggle("hidden");
  };

  return (
    <div className="Default-page-container" ref={containerRef}>
      <div className="left-side-block">
        <Profile className={"profile"} username={"Kainless"} />
        <Navigation className={"navigation"}/>
      </div>
      <div className="center-block">
        <PlaylistsBlock/>
        <div className="middle without-scrollbar">
          { children }
        </div>
        <Player className={"player"} />
      </div>
      <div className="right-side-block" ref={rightBlockRef}>
        <CurentSongBlock closeButtonClickHandler={closeButtonClickHandler} className={"current-song-block"}/>
      </div>
      <CircleButton className="white-button waves-effect waves-dark close-button" onClick={closeButtonClickHandler}>
        <i className="material-icons">chevron_left</i>
      </CircleButton>
    </div>
  )
}

export default DefaultPageContainer;