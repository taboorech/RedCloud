import "./Form.scss";
import { useEffect } from "react";
import M from "materialize-css";
import Button from "../Button/Button";
import { classNamesHandler } from "../../utils/classNamesHandler";

function Form({ className, headlineText, children, anotherOptions, buttonText, onSubmitHandler }) {

  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <form className={classNamesHandler("Form", className)} onSubmit={onSubmitHandler}>
      <h4 className="headline">
        { headlineText }
      </h4>
      <div className="row inputs-block">
        { children }
      </div>
      <div className="row valign-wrapper another-options">
        { anotherOptions }
      </div>
      <Button className={"white-text button"} type={"submit"}>
        { buttonText }
      </Button>
    </form>
  )
}

export default Form;