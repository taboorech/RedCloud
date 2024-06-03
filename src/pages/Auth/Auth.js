import "./Auth.scss";
import Form from "../../components/Form/Form";
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab/Tab";
import Checkbox from "../../components/Checkbox/Checkbox";
import Anchor from "../../components/Anchor/Anchor";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import { useAuthMutation, useRegistrationMutation } from "../../redux";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";

function Auth() {

  const [locationHash, setLocationHash] = useState(window.location.hash);
  const [authEmail, setAuthEmail] = useInput();
  const [authPassword, setAuthPassword] = useInput();
  const [registrationEmail, setRegistrationEmail] = useInput();
  const [registrationLogin, setRegistrationLogin] = useInput();
  const [registrationSurname, setRegistrationSurname] = useInput();
  const [registrationName, setRegistrationName] = useInput();
  const [registrationPassword, setRegistrationPassword] = useInput();
  const [registrationConfirmPassword, setRegistrationConfirmPassword] = useInput();
  const [ auth, authResults ] = useAuthMutation();
  const [ registration, registrationResults ] = useRegistrationMutation();
  const navigate = useNavigate();

  const onAuthSubmitHandler = async (event) => {
    event.preventDefault();
    await auth({email: authEmail, password: authPassword});
  }

  const onRegistrationSubmitHandler = (event) => {
    event.preventDefault();
    if(registrationPassword !== registrationConfirmPassword) {
      return;
    }
    registration({ email: registrationEmail, login: registrationLogin, password: registrationPassword, surname: registrationSurname, name: registrationName});
    console.log(registrationResults);
  }

  const onTabClickHandler = (event) => {
    setLocationHash(event.target.hash);
  }

  useEffect(() => {
    if(authResults.isSuccess) {
      localStorage.setItem("accessToken", authResults.data.accessToken);
      localStorage.setItem("refreshToken", authResults.data.refreshToken);
      navigate('/');
    }
  }, [authResults, navigate]);

  useEffect(() => {
    if(registrationResults.isSuccess) {
      navigate('#registration');
    }
  }, [registrationResults, navigate]);

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
            onSubmitHandler={onAuthSubmitHandler}
            className={"form-block"} 
            anotherOptions={
              <>
                <Checkbox className="col s12 left-align">Remember me</Checkbox>
                <Anchor className="col s12 right-align">Forgot the password?</Anchor>
              </>
            }
          >
            <Input value={authEmail} onChange={setAuthEmail} id={"login"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Login"} />
            <Input value={authPassword} onChange={setAuthPassword} id={"password"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Password"} />
          </Form> 
        :
          <Form 
            headlineText={"Registration"} 
            buttonText={"Sign Up"}
            onSubmitHandler={onRegistrationSubmitHandler}
            className={"form-block"} 
          >
            <Input value={registrationEmail} onChange={setRegistrationEmail} id={"email"} type={"email"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Email"} />
            <Input value={registrationLogin} onChange={setRegistrationLogin} id={"login"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Login"} />
            <Input value={registrationSurname} onChange={setRegistrationSurname} id={"surname"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Surname"} />
            <Input value={registrationName} onChange={setRegistrationName} id={"name"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Name"} />
            <Input value={registrationPassword} onChange={setRegistrationPassword} id={"password"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Password"} />
            <Input value={registrationConfirmPassword} onChange={setRegistrationConfirmPassword} id={"confirmPassword"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Confirm password"} />
          </Form>
        }
      </div>
    </div>
  )
}

export default Auth;