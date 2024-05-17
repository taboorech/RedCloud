import "./CircleButton.scss";

function CircleButton({ className = "", title, children, onClick }) {

  const classNames = [
    "Circle-button",
    "btn-floating",
    ...className.split(" ")
  ];

  return (
    <button className={classNames.join(" ")} onClick={onClick} title={title}>
      {children}
    </button>
  )
}

export default CircleButton;