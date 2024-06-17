import "./PlaylistBaner.scss";
import Image from "../Image/Image";
import CircleButton from "../CircleButton/CircleButton";
import Time from "../Time/Time";
import ModalBlock from "../ModalBlock/ModalBlock";
import FileInput from "../FileInput/FileInput";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { useEffect, useState, useRef } from "react";
import useInput from "../../hooks/use-input";
import { useUpdatePlaylistMutation } from "../../redux";
import { useParams } from "react-router-dom";
import M from "materialize-css";
import ContextMenu from "../ContextMenu/ContextMenu";
import ContextMenuButton from "../ContextMenu/ContextMenuButton/ContextMenuButton";

function PlaylistBaner({ imageSource, title, songsCount, duration, isPrivate, playButtonClickHandler, isOwner = false }) {

  const [ newPlaylistImage, setNewPlaylistImage ] = useState({});
  const [ titleInput, setTitleInput ] = useInput(title);
  const [ isPrivateCheck, setIsPrivateCheck ] = useState(isPrivate);
  const [ updatePlaylist ] = useUpdatePlaylistMutation();
  const modalWindowRef = useRef();
  const contextMenuButtonRef = useRef();
  const id = useParams().id;

  const saveChangeClickHandler = (event) => {
    event.preventDefault();
    const updateForm = new FormData();
    updateForm.append("playlistImage", newPlaylistImage);
    updateForm.append("title", titleInput);
    updateForm.append("private", isPrivateCheck);
    updatePlaylist({
      id,
      form: updateForm
    });
    modalWindowRef.current.classList.add("close");
  }

  const fileInputChangeHandler = (event) => {
    setNewPlaylistImage(event.target.files[0]);
  }

  const privateChangeHandler = () => {
    setIsPrivateCheck(!isPrivateCheck);
  }

  const settingsButtonClickHandler = () => {
    modalWindowRef.current.classList.remove("close");
  }

  useEffect(() => {
    setIsPrivateCheck(isPrivate);
    M.updateTextFields();
  }, [isPrivate]);

  return (
    <div className="PlaylistBaner">
      <div className="playlist-info">
        <div className="image-block">
          <Image alt={"Song"} src={imageSource} />
        </div>
        <div className="text-block">
          <span className="playlist-title">{ title }</span>
          <span className="playlist-duration"><div>{songsCount} { songsCount === 1 ? "song" : "songs" }</div> - <Time className={"light"} time={duration}/></span>
          <span className="playlist-privacy">{isPrivate ? "Private" : "Public"} playlist</span>
        </div>
      </div>
      <div className="buttons">
        <CircleButton className="white-button waves-effect waves-dark btn-large play-button" onClick={playButtonClickHandler}>
          <i className="material-icons">play_arrow</i>
        </CircleButton>
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">shuffle</i>
        </CircleButton>
        <CircleButton className="black-button waves-effect waves-light btn-large white-text">
          <i className="material-icons">file_download</i>
        </CircleButton>
        {isOwner &&
          <>
            <CircleButton className="black-button waves-effect waves-light btn-large white-text">
              <i className="material-icons">add_circle_outline</i>
            </CircleButton> 
            <CircleButton className="black-button waves-effect waves-light btn-large white-text modal-trigger" onClick={settingsButtonClickHandler}>
              <i className="material-icons">settings</i>
            </CircleButton>
          </>
        }
        <CircleButton className="black-button waves-effect waves-light btn-large white-text" innerRef={contextMenuButtonRef}>
          <i className="material-icons">more_vert</i>
        </CircleButton>
      </div>
      <ModalBlock headlineText={"Playlist change"} buttonText={"Save"} onSubmit={saveChangeClickHandler} innerRef={modalWindowRef}>
        <FileInput buttonText={"Playlist image"} onChange={fileInputChangeHandler}/>
        <Input id={"title"} labelText={"Title"} value={titleInput} onChange={setTitleInput}/>
        <Checkbox isChecked={isPrivateCheck} onChange={privateChangeHandler}>Private</Checkbox>
      </ModalBlock>
      <ContextMenu button={contextMenuButtonRef}>
        <ContextMenuButton>Play</ContextMenuButton>
        <ContextMenuButton>Add to queue</ContextMenuButton>
        <ContextMenuButton>Share</ContextMenuButton>
        <ContextMenuButton>Listen together</ContextMenuButton>
        <ContextMenuButton>Add to playlist</ContextMenuButton>
        <ContextMenuButton>Add to folder</ContextMenuButton>
        <ContextMenuButton>Info</ContextMenuButton>
        <ContextMenuButton>Edit</ContextMenuButton>
        <ContextMenuButton className={"red-text text-darken-1"}>Remove playlist</ContextMenuButton>
      </ContextMenu>
    </div>
  )
}

export default PlaylistBaner;