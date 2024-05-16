import "./CircleButton.scss";

function CircleButton({ className, children }) {

  const classNames = [
    "Circle-button",
    "btn-floating",
    ...className.split(" ")
  ];

  return (
    <button className={classNames.join(" ")}>
      {children}
    </button>
  )
}

export default CircleButton;