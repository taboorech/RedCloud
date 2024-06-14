import mainInstance from "../../api/mainInstance";
import { useFetchFriendsQuery } from "../../redux";
import { classNamesHandler } from "../../utils/classNamesHandler";
import CircleButton from "../CircleButton/CircleButton";
import Friend from "../Friend/Friend";
import { useAuth } from "../../hooks/use-auth";
import "./Navigation.scss";

function Navigation({ className }) {

  const { data } = useFetchFriendsQuery();
  const { isAuth } = useAuth()

  const fillFriends = () => (
    data.friends.map((friend, index) => <Friend key={`friend-${index}`} id={friend._id} imageSrc={mainInstance.defaults.baseURL + friend.imageUrl} friendName={friend.login} />)
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
        { !isAuth ?
          <h5>You're offline</h5> :
          <>
            <h5>Friends</h5>
            <div className="friends without-scrollbar">
              {
                !!data?.friends ?
                fillFriends() :
                <h6 className="empty">No friends</h6>
              }
            </div>
          </>
        }
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