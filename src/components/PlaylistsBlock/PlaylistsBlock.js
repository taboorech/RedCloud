import { useEffect, useRef } from "react";
import "./PlaylistsBlock.scss";
import M from "materialize-css";
import CircleButton from "../CircleButton/CircleButton";
import { classNamesHandler } from "../../utils/classNamesHandler";

function PlaylistsBlock({ className }) {

  const playlistsElementRef = useRef();
  const contentElementRef = useRef();

  const playlists = [
    "./images/avatar.jpg", 
    "./images/avatar.jpg", 
    "./images/avatar.jpg", 
    "./images/1.jpg", 
    "./images/avatar.jpg", 
    "./images/avatar.jpg", 
    "./images/avatar.jpg", 
    "./images/1.jpg", 
    "./images/avatar.jpg", 
    "./images/avatar.jpg", 
    "./images/1.jpg",
    "./images/avatar.jpg",
    "./images/avatar.jpg",
    "./images/1.jpg",
    "./images/1.jpg",
    "./images/1.jpg",
    "./images/avatar.jpg",
    "./images/avatar.jpg",
    "./images/1.jpg",
    "./images/1.jpg",
    "./images/avatar.jpg",
    "./images/1.jpg",
  ];

  const fillPlaylists = () => (
    playlists.map((playlist, index) => (
      <div key={`playlist-${index}`} className="playlist">
        <img src={playlist} alt="playlistImage" className="responsive-img"/>
      </div>
    ))
  )

  const nextButtonClickHandler = () => {
    const contentElementProperties = contentElementRef.current.getBoundingClientRect();
    const playlistsElement = playlistsElementRef.current;
    const playlistsElementChildrenStyle = window.getComputedStyle(playlistsElement.children[0]);
    const calculatedWidth = parseFloat(playlistsElementChildrenStyle.width) + parseFloat(playlistsElementChildrenStyle.marginRight);
    const playlistsLastElementProperties = playlistsElement.children[playlistsElement.children.length - 1].getBoundingClientRect();
    let pos = +playlistsElement.style.left.replace("px", "") - calculatedWidth;

    if((contentElementProperties.x + contentElementProperties.width) >= (playlistsLastElementProperties.x + playlistsLastElementProperties.width)) {
      pos = 0;
    }
    playlistsElement.style.left = pos + "px";
  }

  const prevButtonClickHandler = () => {
    const contentElementProperties = contentElementRef.current.getBoundingClientRect();
    const playlistsElement = playlistsElementRef.current;
    const playlistsElementChildrenStyle = window.getComputedStyle(playlistsElement.children[0]);
    const calculatedWidth = parseFloat(playlistsElementChildrenStyle.width) + parseFloat(playlistsElementChildrenStyle.marginRight);
    let pos = +playlistsElement.style.left.replace("px", "") + calculatedWidth;

    const countOfElements = Math.ceil(contentElementProperties.width / calculatedWidth);

    if(pos > 0) {
      pos = -(calculatedWidth * playlists.length - countOfElements * calculatedWidth);
    }
    playlistsElement.style.left = pos + "px";
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems);
    window.addEventListener("resize", () => {
      const playlistsElement = playlistsElementRef.current;
      playlistsElement.style.left = "0px";
    });
  }, []);

  return (
    <div className={classNamesHandler("PlaylistsBlock", className)}>
      <div className="prev-button scroll-button" onClick={prevButtonClickHandler}>
        <img src={"./images/Previous playlist.svg"} alt="prevPlaylistsButton"/>
      </div>
      <div className="content" ref={contentElementRef}>
        <div ref={playlistsElementRef} className="playlists with-transition">
          {fillPlaylists()}
        </div>
      </div>
      <div className="next-button scroll-button" onClick={nextButtonClickHandler}>
        <img src={"./images/Next playlist.svg"} alt="nextPlaylistsButton"/>
      </div>
      <CircleButton className={"btn-small waves-effect waves-dark white-button add-button"}>
        <i className="material-icons">add</i>
      </CircleButton>
    </div>
  )
}

export default PlaylistsBlock;