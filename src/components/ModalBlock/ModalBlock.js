import Backdrop from "../Backdrop/Backdrop";
import Form from "../Form/Form";
import "./ModalBlock.scss";

function ModalBlock({ onSubmit, buttonText, headlineText, children, innerRef }) {

  const onBackgroundClickHandler = () => {
    innerRef.current.classList.add("close")
  }

  return (
    <div className="Modal-block close" ref={innerRef}>
      <Form 
        className="form" 
        headlineText={headlineText} 
        buttonText={buttonText}
        onSubmitHandler={onSubmit}
      >
        { children }
      </Form>
      <Backdrop onClick={onBackgroundClickHandler}></Backdrop>
    </div>
  )
}

export default ModalBlock;