import "./Auth.scss";
import Form from "../../components/Form/Form";
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab/Tab";

function Auth() {
  return (
    <div className="Auth">
      <div className="container">
        <Tabs className="tabs-block">
          <Tab className="active">Auth</Tab>
          <Tab>Reg</Tab>
        </Tabs>
        <Form headlineText={"Authorization"} className={"form-block"}></Form>
      </div>
    </div>
  )
}

export default Auth;