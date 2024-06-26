import "./SwitchButton.scss"
import React, { useRef } from 'react';

const ToggleSwitch = ({ setIsQueue }) => {
    const switchTab = useRef();
    const labelRef = useRef();
  
    const toggleClickHandler = () => {
      if(!switchTab.current.classList.contains("toggled")) {
        labelRef.current.innerHTML = "Author";
        setIsQueue(false);
        return switchTab.current.classList.add("toggled");
      }
      labelRef.current.innerHTML = "Queue";
      setIsQueue(true);
      return switchTab.current.classList.remove("toggled");
    };
  
    return (
      <div className={`Swtich-button`} ref={switchTab} onClick={toggleClickHandler}>
        <div className="switch">          
          <span className="label" ref={labelRef}>{"Queue"}</span>
        </div>
      </div>
    );
};
  
export default ToggleSwitch;