import { classNamesHandler } from "../../utils/classNamesHandler";
import "./Baner.scss";

function Baner({ className }){
  return(
    <div className={classNamesHandler("Baner", className)}>
      <div className="row">
        <div className="column">
          <div className="head-line"><h2>Justin Bieber - Changes</h2></div>
        </div>
        <div className="column">
          <button>Listen Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default Baner