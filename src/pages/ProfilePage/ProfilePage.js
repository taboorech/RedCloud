import "./ProfilePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import Image from "../../components/Image/Image";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import AchievementsBlock from "../../components/AchievementsBlock/AchievementsBlock";
import SongsList from "../../components/SongsList/SongsList";
import SongExpansive from "../../components/SongExpansive/SongExpansive";

function ProfilePage({ audio }) {
  return (
    <div className="ProfilePage">
      <DefaultPageContainer audio={audio}>
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
            <CircleButton isLink={true} to={"/profile/settings"} className="waves-effect waves-light black-button">
              <i className="material-icons">edit</i>
            </CircleButton>
          </Block>
          <div className="additional-info">
            <SongsList className={"playlist-songs scroll"}>
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
              <SongExpansive title={"Song title"} secondaryInfo={"Album title"} duration={239} imageSrc={"./images/avatar.jpg"} />
            </SongsList>
            <AchievementsBlock className={"achievements-block"}/>
          </div>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default ProfilePage;