import "./ProfilePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import Image from "../../components/Image/Image";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";

function ProfilePage() {
  return (
    <div className="ProfilePage">
      <DefaultPageContainer>
        <Block className="info">
          <Block className="main-info">
            <div className="person-info-container">
              <div className="image-block">
                <Image src={"./images/avatar.jpg"} alt={"Profile image"}/>
              </div>
              <div className="person-info">
                <p className="name">
                  Name
                </p>
                <p className="description">Description</p>
              </div>
            </div>
            <CircleButton className="waves-effect waves-light black-button">
              <i className="material-icons">edit</i>
            </CircleButton>
          </Block>
          <div className="additional-info"></div>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default ProfilePage;