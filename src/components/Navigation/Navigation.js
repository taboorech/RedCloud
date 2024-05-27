import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Friend from "../Friend/Friend";
import "./Navigation.scss";

function Navigation({ className }) {

  const friendsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fillFriends = () => (
    friendsArr.map((friend, index) => <Friend key={`friend-${index}`}/>)
  )

  return (
    <div className={classNamesHandler("Navigation", className)}>
      <div className="upper-buttons-block buttons-block">
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"Add person to room"}>
          <i className="material-icons">person_add</i>
        </CircleButton>
        <CircleButton isNavLink={true} to={"/"} className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"Return home"}>
          <i className="material-icons">home</i>
        </CircleButton>
        <CircleButton isNavLink={true} to={"/search"} className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"Search page"}>
          <i className="material-icons">search</i>
        </CircleButton>
      </div>
      <div className="friends-online-block">
        <h5>Friends online</h5>
        <div className="friends without-scrollbar">
          {fillFriends()}
        </div>
      </div>
      <div className="bottom-buttons-block buttons-block">
        <CircleButton isNavLink={true} to={"/settings"} className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"Settings"}>
          <i className="material-icons">settings</i>
        </CircleButton>
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"Get premium"}>
          <i className="material-icons">stars</i>
        </CircleButton>
        <CircleButton isNavLink={true} to={"/about"} className="btn-large waves-effect waves-light black-button white-text without-shadow" title={"About us"}>
          <i className="material-icons">info_outline</i>
        </CircleButton>
      </div>
    </div>
  )
}

export default Navigation;