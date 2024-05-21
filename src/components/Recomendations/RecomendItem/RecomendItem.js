import "./RecomendItem.scss"
import songImage from "./Song.png"
function RecomendItem(){
    return(
        <div className="RecomendItem">
            <div className="image">
                <img src={songImage} alt="PlayList"/>
            </div>
            <div className="head-line">
                <h5>Name</h5>
            </div>
            <div className="sub-heading">
                <p>Author</p>
            </div>
        </div>
    )
}

export default RecomendItem; 