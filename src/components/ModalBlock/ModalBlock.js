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
      <div className="background" onClick={onBackgroundClickHandler}></div>
    </div>
  )
}

export default ModalBlock;