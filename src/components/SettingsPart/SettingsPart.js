import "./SettingsPart.scss";
import ContentWithHeader from "../ContentWithHeader/ContentWithHeader";
import { classNamesHandler } from "../../utils/classNamesHandler";

function SettingsPart({ header, className, children }) {
  return (
    <ContentWithHeader className={classNamesHandler("Settings-part", className)} header={header}>
      { children }
    </ContentWithHeader>
  )
}

export default SettingsPart;