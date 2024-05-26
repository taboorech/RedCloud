import "./Auth.scss";
import Form from "../../components/Form/Form";
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab/Tab";
import Checkbox from "../../components/Checkbox/Checkbox";
import Anchor from "../../components/Anchor/Anchor";
import Input from "../../components/Input/Input";
import { useState } from "react";

function Auth() {

  const [locationHash, setLocationHash] = useState(window.location.hash);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  const onTabClickHandler = (event) => {
    setLocationHash(event.target.hash);
  }

  return (
    <div className="Auth">
      <div className="container">
        <Tabs className="tabs-block">
          <Tab isLink={true} to={"#auth"} className={locationHash === "#auth" ? "active" : ""} onClick={(event) => onTabClickHandler(event)}>Auth</Tab>
          <Tab isLink={true} to={"#registration"} className={locationHash === "#registration" ? "active" : ""}  onClick={(event) => onTabClickHandler(event)}>Registration</Tab>
        </Tabs>
        {locationHash === "#auth" ?
          <Form 
            headlineText={"Authorization"} 
            buttonText={"Log in"}
            onSubmitHandler={onSubmitHandler}
            className={"form-block"} 
            anotherOptions={
              <>
                <Checkbox className="col s12 left-align">Remember me</Checkbox>
                <Anchor className="col s12 right-align">Forgot the password?</Anchor>
              </>
            }
          >
            <Input id={"login"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Login"} />
            <Input id={"password"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Password"} />
          </Form> 
        :
          <Form 
            headlineText={"Registration"} 
            buttonText={"Sign Up"}
            onSubmitHandler={onSubmitHandler}
            className={"form-block"} 
          >
            <Input id={"email"} type={"email"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Email"} />
            <Input id={"login"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Login"} />
            <Input id={"telNumber"} type={"tel"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Telephone number"} />
            <Input id={"password"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Password"} />
            <Input id={"confirmPassword"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Confirm password"} />
          </Form>
        }
      </div>
    </div>
  )
}

export default Auth;