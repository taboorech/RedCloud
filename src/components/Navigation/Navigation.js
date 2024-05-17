import CircleButton from "../CircleButton/CircleButton";
import Friend from "../Friend/Friend";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="upper-buttons-block buttons-block">
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">person_add</i>
        </CircleButton>
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">home</i>
        </CircleButton>
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">search</i>
        </CircleButton>
      </div>
      <div className="friends-online-block">
        <h5>Friends online</h5>
        <div className="friends">
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
        </div>
      </div>
      <div className="bottom-buttons-block buttons-block">
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">settings</i>
        </CircleButton>
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">stars</i>
        </CircleButton>
        <CircleButton className="btn-large waves-effect waves-light black-button white-text without-shadow">
          <i className="material-icons">info_outline</i>
        </CircleButton>
      </div>
    </div>
  )
}

export default Navigation;