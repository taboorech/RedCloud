import "./ProfilePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import Image from "../../components/Image/Image";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import AchievementsBlock from "../../components/AchievementsBlock/AchievementsBlock";
import SongsList from "../../components/List/List";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import { useAddFriendMutation, useFetchProfileInfoQuery } from "../../redux";
import mainInstance from "../../api/mainInstance";
import Achievement from "../../components/AchievementsBlock/Achievement/Achievement";
import { useParams } from "react-router-dom";

function ProfilePage({ audio }) {

  const id = useParams().id;
  const { data } = useFetchProfileInfoQuery(!!id ? id : localStorage.getItem("userId"));
  const { setPlaylist } = audio;
  const [ addFriend ] = useAddFriendMutation();

  const fillHimselfSongs = () => {
    const songsOnClick = () => {
      setPlaylist([]);
    }
    return data?.songs.map(song => 
      <SongExpansive 
        key={song._id} 
        songId={song._id} 
        title={song.title} 
        secondaryInfo={song.album} 
        duration={song.duration} 
        songUrl={mainInstance.defaults.baseURL + song.songUrl} 
        imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
        onClick={songsOnClick}
        audio={audio} 
      />
    )
  }

  const addFriendButtonClickHandler = () => {
    addFriend(id);
  }

  return (
    <div className="ProfilePage">
      <DefaultPageContainer audio={audio}>
        <Block className="info">
          <Block className="main-info">
            <div className="person-info-container">
              <div className="image-block">
                <Image src={data && mainInstance.defaults.baseURL + data.imageUrl} alt={"Profile image"}/>
              </div>
              <div className="person-info">
                <p className="name">
                  { data && data.login }
                </p>
                <p className="description">{ data && data.description }</p>
              </div>
            </div>
            <div className="buttons">
              { 
                (data && data._id === localStorage.getItem("userId")) &&
                <CircleButton isLink={true} to={"/profile/settings"} className="waves-effect waves-light black-button">
                  <i className="material-icons">edit</i>
                </CircleButton> 
              }
              {
                (data && (!data.friends.find(friend => friend === localStorage.getItem("userId")) && !(data._id === localStorage.getItem("userId")))) &&
                <CircleButton className="waves-effect waves-light black-button add-friend-button" onClick={addFriendButtonClickHandler}>
                  <i className="material-icons">group_add</i>
                </CircleButton>
              }
              <CircleButton className="waves-effect waves-light black-button more-option-button" onClick={addFriendButtonClickHandler}>
                <i className="material-icons">more_vert</i>
              </CircleButton>
            </div>
          </Block>
          <div className="additional-info">
            <SongsList className={"playlist-songs scroll"}>
              { fillHimselfSongs() }
            </SongsList>
            <AchievementsBlock className={"achievements-block"}>
              <Achievement icon={"music_note"} detail={"Songs listened"} count={(data && data.stats.songsListened) || 0}/>
              <Achievement icon={"search"} detail={"Songs found"} count={(data && data.stats.songsFound) || 0}/>
              <Achievement icon={"favorite"} detail={"Songs liked"} count={(data && data.stats.songsLiked) || 0}/>
              <Achievement icon={"queue_music"} detail={"Playlists created"} count={(data && data.stats.playlistsCreated) || 0}/>
            </AchievementsBlock>
          </div>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default ProfilePage;