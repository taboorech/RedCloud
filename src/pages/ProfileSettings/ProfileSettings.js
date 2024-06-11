import "./ProfileSettings.scss";
import Block from "../../components/Block/Block";
import Checkbox from "../../components/Checkbox/Checkbox";
import FileInput from "../../components/FileInput/FileInput";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import SettingsPart from "../../components/SettingsPart/SettingsPart";
import Textarea from "../../components/Textarea/Textarea";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import mainInstance from "../../api/mainInstance";
import useInput from "../../hooks/use-input";
import { useFetchProfileInfoQuery, useUpdateAvatarMutation, useUpdateInfoMutation } from "../../redux";
import { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

function ProfileSettings({ audio }) {
  const { data } = useFetchProfileInfoQuery();
  const [usernameInput, setUsernameInput] = useInput(data?.login);
  const [surnameInput, setSurnameInput] = useInput(data?.surname);
  const [nameInput, setNameInput] = useInput(data?.name);
  const [descriptionInput, setDescriptionInput] = useInput(data?.description);
  const [countrySelectValue, setCountrySelectValue] = useState(data?.country || "");
  const [backgroundImage, setBackgroundImage] = useState({});
  const [fileInputValue, setFileInputValue] = useState(data?.backgroundImage?.originalname);
  const [ updateInfo ] = useUpdateInfoMutation();
  const [ updateAvatar ] = useUpdateAvatarMutation();
  const avatarFileInputRef = useRef();
  const navigate = useNavigate();

  // Checkboxes states
  const [settings, setSettings] = useState({
    profile: {
      showPlaylists: false,
      showStats: false,
      showFavoriteAuthors: false,
      showFavoritePlaylists: false,
    },
    recommends: {
      showFriendsListenSongs: false,
      showRecommendsSongsOnMainPage: false,
      showRecommendsPlaylistsOnMainPage: false,
      muchRecommendUserCountrySongs: false,
    },
    main: {
      getNotifications: false,
    },
    privacy: {
      privateProfile: false,
      showUserListeningSongs: false,
      twoStepVerification: false,
    },
  });

  useEffect(() => {
    if (data) {
      setCountrySelectValue(data.country);
      setFileInputValue(data.backgroundImage?.originalname);
      setSettings({
        profile: {
          showPlaylists: data.settings.profile.showPlaylists,
          showStats: data.settings.profile.showStats,
          showFavoriteAuthors: data.settings.profile.showFavoriteAuthors,
          showFavoritePlaylists: data.settings.profile.showFavoritePlaylists,
        },
        recommends: {
          showFriendsListenSongs: data.settings.recommends.showFriendsListenSongs,
          showRecommendsSongsOnMainPage: data.settings.recommends.showRecommendsSongsOnMainPage,
          showRecommendsPlaylistsOnMainPage: data.settings.recommends.showRecommendsPlaylistsOnMainPage,
          muchRecommendUserCountrySongs: data.settings.recommends.muchRecommendUserCountrySongs,
        },
        main: {
          getNotifications: data.settings.main.getNotifications,
        },
        privacy: {
          privateProfile: data.settings.privacy.privateProfile,
          showUserListeningSongs: data.settings.privacy.showUserListeningSongs,
          twoStepVerification: data.settings.privacy.twoStepVerification,
        },
      });
    }
    M.updateTextFields();
  }, [data]);

  const onCheckedHandler = (section, key) => (event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [key]: event.target.checked,
      },
    }));
  };

  const saveButtonClick = () => {
    const updateForm = new FormData();
    updateForm.append("login", usernameInput);
    updateForm.append("surname", surnameInput);
    updateForm.append("name", nameInput);
    updateForm.append("country", countrySelectValue);
    updateForm.append("backgroundImage", backgroundImage);
    updateForm.append("settings", JSON.stringify(settings));
    updateInfo(updateForm)
    .then((result) => {
      if(!result.error)
        navigate("/profile")
    })
  }

  const countrySelectValueChangeHandler = (event) => {
    setCountrySelectValue(event.target.value);
  }

  const backgroundImageInputChangeHandler = (event) => {
    setBackgroundImage(event.target.files[0]);
  }

  const avatarInputChangeHandler = (event) => {
    const form = new FormData();
    form.append("avatarImage", event.target.files[0]);
    updateAvatar(form);
  }

  const changeAvatarImageChangeHandler = () => {
    avatarFileInputRef.current.click();
  }

  return (
    <div className="Profile-settings">
      <DefaultPageContainer audio={audio}>
        <Block className={"settings scroll"}>
          <div className="main-settings">
            <div className="box">
              <div className="image-block" onClick={changeAvatarImageChangeHandler}>
                <Image src={data && mainInstance.defaults.baseURL + data.imageUrl} alt={"Profile image"} />
                <div className="background"></div>
                <i className="material-icons edit">edit</i>
                <input type="file" hidden={true} ref={avatarFileInputRef} onChange={avatarInputChangeHandler}/>
              </div>
              <div className="inputs">
                <Input id={"username"} labelText={"Username"} value={usernameInput} onChange={setUsernameInput} isActive={!!data} />
                <Input id={"surname"} labelText={"Surname"} value={surnameInput} onChange={setSurnameInput} isActive={!!data} />
                <Input id={"name"} labelText={"Name"} value={nameInput} onChange={setNameInput} isActive={!!data} />
                <Textarea id={"description"} labelText={"Description"} isActive={!!data} value={descriptionInput} onChange={setDescriptionInput}/>
              </div>
            </div>
            <Select header="Choose your country" className={"select"} value={countrySelectValue} onChange={countrySelectValueChangeHandler}>
              <option value={"UKRAINE"}>Ukraine</option>
            </Select>
          </div>
          <FileInput buttonText={"Profile background image"} onChange={backgroundImageInputChangeHandler} value={fileInputValue}/>
          <div className="additional-settings">
            <SettingsPart className={"part"} header={<h4>Profile</h4>}>
              <Checkbox isChecked={settings.profile.showPlaylists} onChange={onCheckedHandler('profile', 'showPlaylists')}>Show my playlists</Checkbox>
              <Checkbox isChecked={settings.profile.showStats} onChange={onCheckedHandler('profile', 'showStats')}>Show my stats</Checkbox>
              <Checkbox isChecked={settings.profile.showFavoriteAuthors} onChange={onCheckedHandler('profile', 'showFavoriteAuthors')}>Show my favorite authors</Checkbox>
              <Checkbox isChecked={settings.profile.showFavoritePlaylists} onChange={onCheckedHandler('profile', 'showFavoritePlaylists')}>Show my favorite playlists</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Recommends</h4>}>
              <Checkbox isChecked={settings.recommends.showFriendsListenSongs} onChange={onCheckedHandler('recommends', 'showFriendsListenSongs')}>Show friend’s listen songs</Checkbox>
              <Checkbox isChecked={settings.recommends.showRecommendsSongsOnMainPage} onChange={onCheckedHandler('recommends', 'showRecommendsSongsOnMainPage')}>Show recommends songs on main page</Checkbox>
              <Checkbox isChecked={settings.recommends.showRecommendsPlaylistsOnMainPage} onChange={onCheckedHandler('recommends', 'showRecommendsPlaylistsOnMainPage')}>Show recommends playlists on main page</Checkbox>
              <Checkbox isChecked={settings.recommends.muchRecommendUserCountrySongs} onChange={onCheckedHandler('recommends', 'muchRecommendUserCountrySongs')}>Too much recommends your country’s songs</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Main</h4>}>
              <Checkbox isChecked={settings.main.getNotifications} onChange={onCheckedHandler('main', 'getNotifications')}>Get notifications</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Privacy</h4>}>
              <Checkbox isChecked={settings.privacy.privateProfile} onChange={onCheckedHandler('privacy', 'privateProfile')}>Private profile</Checkbox>
              <Checkbox isChecked={settings.privacy.showUserListeningSongs} onChange={onCheckedHandler('privacy', 'showUserListeningSongs')}>Show to friends songs which I’m listening</Checkbox>
              <Checkbox isChecked={settings.privacy.twoStepVerification} onChange={onCheckedHandler('privacy', 'twoStepVerification')}>Two-step verification</Checkbox>
            </SettingsPart>
          </div>
          <Button className={"white-text waves-effect waves-light save-button"} onClick={saveButtonClick}>
            Save
          </Button>
        </Block>
      </DefaultPageContainer>
    </div>
  );
}

export default ProfileSettings;
