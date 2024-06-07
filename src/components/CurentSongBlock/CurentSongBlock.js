import "./CurentSongBlock.scss"
import SwitchButton from "./SwitchButton/SwitchButton"
import Part from "./Part/Part";
import SongsBlock from "./SongsBlock/SongsBlock";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import AuthorBiographyBlock from "./AuthorBiographyBlock/AuthorBiographyBlock";
import { useFetchSongQuery } from "../../redux";
import mainInstance from "../../api/mainInstance";
import Song from "../Song/Song";

function CurentSongBlock({ closeButtonClickHandler, audio }){

  const { songId, playlist, currentSongIndex } = audio;
  const [isQueue, setIsQueue] = useState(true);
  const partRef = useRef();
  const { data } = useFetchSongQuery(songId);

  const fillSongs = () => (
    playlist.map((song, index) => 
      (index > currentSongIndex()) && <Song key={song._id} title={song.title} author={song.authors[0].login} duration={song.duration} imageUrl={mainInstance.defaults.baseURL + song.imageUrl} className="song"/> 
    )
  );

  return(
    <div className="CurentSongBlock">
      <div className="switch-button-container">
        <SwitchButton setIsQueue={setIsQueue}/>
      </div>
      <div className="for-part">
        <CSSTransition nodeRef={partRef} in={isQueue} timeout={{
          enter: 500,
          exit: 300
        }} mountOnEnter unmountOnExit>
          <Part imageSrc={data && mainInstance.defaults.baseURL + data.imageUrl} imageAlt={"Playlist-image"} innerRef={partRef} className={"queue-part"} closeButtonClickHandler={closeButtonClickHandler}>
            <SongsBlock>
              {fillSongs()}
            </SongsBlock>
          </Part>
        </CSSTransition>
        <CSSTransition nodeRef={partRef} in={!isQueue} timeout={{
          enter: 500,
          exit: 300
        }} mountOnEnter unmountOnExit>
          <Part imageSrc={data && mainInstance.defaults.baseURL + data.authors[0].imageUrl} imageAlt={"Author-photo"} innerRef={partRef} className={"author-part"} closeButtonClickHandler={closeButtonClickHandler}>
            <AuthorBiographyBlock>
              { data && <h4 className="truncate">{data.authors[0].login}</h4> }
              { data && data.authors[0].description }
            </AuthorBiographyBlock>
          </Part>
        </CSSTransition>
      </div>
    </div>
  )
}

export default CurentSongBlock;