import "./CurentSongBlock.scss"
import SwitchButton from "./SwitchButton/SwitchButton"
import Part from "./Part/Part";
import SongsBlock from "./SongsBlock/SongsBlock";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import AuthorBiographyBlock from "./AuthorBiographyBlock/AuthorBiographyBlock";

function CurentSongBlock({ closeButtonClickHandler }){

  const [isQueue, setIsQueue] = useState(true);
  const partRef = useRef();

  return(
    <div className="CurentSongBlock">
      <div className="switch-button-container">
        <SwitchButton setIsQueue={setIsQueue}/>
      </div>
      <CSSTransition nodeRef={partRef} in={isQueue} timeout={{
        enter: 500,
        exit: 300
      }} mountOnEnter unmountOnExit>
        <Part imageSrc={"./images/Song.png"} imageAlt={"Playlist-image"} innerRef={partRef} className={"queue-part"} closeButtonClickHandler={closeButtonClickHandler}>
          <SongsBlock/>
        </Part>
      </CSSTransition>
      <CSSTransition nodeRef={partRef} in={!isQueue} timeout={{
        enter: 500,
        exit: 300
      }} mountOnEnter unmountOnExit>
        <Part imageSrc={"./images/avatar.jpg"} imageAlt={"Author-photo"} innerRef={partRef} className={"author-part"} closeButtonClickHandler={closeButtonClickHandler}>
          <AuthorBiographyBlock/>
        </Part>
      </CSSTransition>
    </div>
  )
}

export default CurentSongBlock;