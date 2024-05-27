import "./SettingsPart.scss";
import ContentWithHeader from "../ContentWithHeader/ContentWithHeader";

function SettingsPart({ header, children }) {
  return (
    <ContentWithHeader className={"Settings-part"} header={header}>
      { children }
    </ContentWithHeader>
  )
}

export default SettingsPart;