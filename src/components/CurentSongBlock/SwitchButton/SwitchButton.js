import "./SwitchButton.scss"
import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  
    return (
      <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
        <div className="switch">
          <span className="label">{isToggled ? 'Author' : 'Queue'}</span>
        </div>
      </div>
    );
};
  
export default ToggleSwitch;