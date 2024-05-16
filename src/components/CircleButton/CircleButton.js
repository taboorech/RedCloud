import "./CircleButton.scss";

function CircleButton({ className = "", children, onClick }) {

  const classNames = [
    "Circle-button",
    "btn-floating",
    ...className.split(" ")
  ];

  return (
    <button className={classNames.join(" ")} onClick={onClick} >
      {children}
    </button>
  )
}

export default CircleButton;