import { useEffect } from "react";
import M from "materialize-css";
import "./Form.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Form({ className, headlineText, children }) {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <form className={classNamesHandler("Form", className)} onSubmit={onSubmitHandler}>
      <h4 className="headline">
        { headlineText }
      </h4>
      {/* <div className="inputs-block">

      </div> */}
      <div className="row inputs-block">
        <Input id={"login"} type={"text"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Login"} />
        <Input id={"password"} type={"password"} blockClassName={"s12"} inputClassName={"validate"} labelText={"Password"} />
      </div>
      <Button className={"white-text"}>
        Log in
      </Button>
      {/* { children } */}
    </form>
  )
}

export default Form;