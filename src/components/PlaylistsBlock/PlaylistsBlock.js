import { useEffect, useRef } from "react";
import "./PlaylistsBlock.scss";
import M from "materialize-css";
import CircleButton from "../CircleButton/CircleButton";
import { classNamesHandler } from "../../utils/classNamesHandler";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useFetchPlaylistsQuery } from "../../redux";

function PlaylistsBlock({ className }) {

  const playlistsElementRef = useRef();
  const contentElementRef = useRef();

  const { data } = useFetchPlaylistsQuery();

  const playlists = data ? data : [];

  const fillPlaylists = () => (
    playlists.map((playlist, index) => (
      <NavLink to={`/playlist/${playlist._id}`} key={`playlist-${index}`} className="playlist">
        <img src={playlist.imageUrl} alt="playlistImage" className="responsive-img"/>
      </NavLink>
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
      if(!!playlistsElement) {
        playlistsElement.style.left = "0px";
      }
    });
  }, []);

  return (
    <div className={classNamesHandler("PlaylistsBlock", className)}>
      <div className="prev-button scroll-button" onClick={prevButtonClickHandler}>
        <img src={"./images/Previous playlist.svg"} alt="prevPlaylistsButton"/>
      </div>
      <div className="content" ref={contentElementRef}>
        {!!playlists.length ?
          <div ref={playlistsElementRef} className="playlists with-transition">
            {fillPlaylists()}
          </div> :
          <Button className={"white-button waves-effect waves-dark create-button"}>Create</Button>
        }
      </div>
      <div className="next-button scroll-button" onClick={nextButtonClickHandler}>
        <img src={"./images/Next playlist.svg"} alt="nextPlaylistsButton"/>
      </div>
      {!!playlists.length &&
        <CircleButton className={"btn-small waves-effect waves-dark white-button add-button"}>
          <i className="material-icons">add</i>
        </CircleButton>
      }
    </div>
  )
}

export default PlaylistsBlock;