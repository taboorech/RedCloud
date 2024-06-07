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
import { useFetchProfileInfoQuery } from "../../redux";
import { useEffect } from "react";
import M from "materialize-css";

function ProfileSettings({ audio }) {

  const { data } = useFetchProfileInfoQuery();
  const [usernameInput, setUsernameInput] = useInput();

  useEffect(() => {
    M.updateTextFields();
  }, []);

  // useEffect(() => {
  //   if(isSuccess) {
  //     setUsernameInput(data?.login);
  //   }
  // }, [data, isSuccess, setUsernameInput]);

  return (
    <div className="Profile-settings">
      <DefaultPageContainer audio={audio}>
        <Block className={"settings scroll"}>
          <div className="main-settings">
            <div className="box">
              <div className="image-block">
                <Image src={data && mainInstance.defaults.baseURL + data.imageUrl} alt={"Profile image"} />
              </div>
              <div className="inputs">
                <Input id={"name"} labelText={"Name"} value={usernameInput} onChange={setUsernameInput}/>
                <Textarea id={"description"} labelText={"Description"} />
              </div>
            </div>
            <Select header="Choose your country" className={"select"}>
              <option value={"ukraine"}>Ukraine</option>
            </Select>
          </div>
          <FileInput buttonText={"Profile background image"}/>
          <div className="additional-settings">
            <SettingsPart className={"part"} header={<h4>Profile</h4>}>
              <Checkbox>Show my playlists</Checkbox>
              <Checkbox>Show my stats</Checkbox>
              <Checkbox>Show my favorite authors</Checkbox>
              <Checkbox>Show my favorite playlists</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Recommends</h4>}>
              <Checkbox>Show friend’s listen songs</Checkbox>
              <Checkbox>Show recommends songs on main page</Checkbox>
              <Checkbox>Show recommends playlists on main page</Checkbox>
              <Checkbox>Too much recommends your country’s songs</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Main</h4>}>
              <Checkbox>Get notifications</Checkbox>
            </SettingsPart>
            <SettingsPart className={"part"} header={<h4>Privacy</h4>}>
              <Checkbox>Private profile</Checkbox>
              <Checkbox>Show to friends songs which I’m listening</Checkbox>
              <Checkbox>Two-step verification</Checkbox>
            </SettingsPart>
          </div>
          <Button className={"white-text waves-effect waves-light save-button"}>
            Save
          </Button>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default ProfileSettings;