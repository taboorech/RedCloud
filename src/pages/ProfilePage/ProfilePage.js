import "./ProfilePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import Image from "../../components/Image/Image";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import AchievementsBlock from "../../components/AchievementsBlock/AchievementsBlock";
import SongsList from "../../components/SongsList/SongsList";
import SongExpansive from "../../components/SongExpansive/SongExpansive";
import { useFetchProfileInfoQuery } from "../../redux";
import mainInstance from "../../api/mainInstance";
import Achievement from "../../components/AchievementsBlock/Achievement/Achievement";

function ProfilePage({ audio }) {

  const { data } = useFetchProfileInfoQuery();

  const fillHimselfSongs = () => (
    data?.songs.map(song => 
      <SongExpansive 
        key={song._id} 
        songId={song._id} 
        title={song.title} 
        secondaryInfo={song.album} 
        duration={song.duration} 
        songUrl={mainInstance.defaults.baseURL + song.songUrl} 
        imageSrc={mainInstance.defaults.baseURL + song.imageUrl} 
        audio={audio} 
      />
    )
  )

  return (
    <div className="ProfilePage">
      <DefaultPageContainer audio={audio}>
        <Block className="info">
          <Block className="main-info">
            <div className="person-info-container">
              <div className="image-block">
                <Image src={data && data.imageUrl} alt={"Profile image"}/>
              </div>
              <div className="person-info">
                <p className="name">
                  { data && data.login }
                </p>
                <p className="description">{ data && data.description }</p>
              </div>
            </div>
            <CircleButton isLink={true} to={"/profile/settings"} className="waves-effect waves-light black-button">
              <i className="material-icons">edit</i>
            </CircleButton>
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