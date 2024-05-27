import "./Settings.scss";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import Block from "../../components/Block/Block";
import ContentWithHeader from "../../components/ContentWithHeader/ContentWithHeader";
import SettingsPart from "../../components/SettingsPart/SettingsPart";
import Select from "../../components/Select/Select";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";

function Settings() {
  return (
    <div className="Settings">
      <DefaultPageContainer>
        <Block className={"settings-properties"}>
          <ContentWithHeader header={<h3>Settings</h3>} className={"scroll"}>
            <SettingsPart header={<h5>Language</h5>}>
              <div>
                <span>Choose your language</span>
                <Select className={"select-element"} header="Choose language">
                  <option value={"english"}>English</option>  
                  <option value={"ukrainian"}>Ukrainian</option>  
                </Select>
              </div>
            </SettingsPart>
            <SettingsPart header={<h5>Auto replay</h5>}>
              <div>
                <span>Set auto replay</span>
                <Checkbox></Checkbox>
              </div>
            </SettingsPart>
            <SettingsPart header={<h5>Quality</h5>}>
              <div>
                <span>Audio quality</span>
                <Select className={"select-element"} header="Choose quality">
                  <option value={"default"}>Default</option>
                  <option value={"low"}>Low</option>
                  <option value={"high"}>High</option>
                </Select>
              </div>
              <div>
                <span>Download quality</span>
                <Select className={"select-element"} header="Choose quality">
                  <option value={"default"}>Default</option>
                  <option value={"low"}>Low</option>
                  <option value={"high"}>High</option>
                </Select>
              </div>
              <div>
                <span>Automatic quality setting</span>
                <Checkbox></Checkbox>
              </div>
            </SettingsPart>
          </ContentWithHeader>
          <Button className={"white-text save-button"}>Save</Button>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default Settings;