import RecomendItem from "./RecomendItem/RecomendItem";
import "./Recomendations.scss";

function Recomendations(){

    const playListArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const fillPlayLit = () => (
        playListArr.map((PlayList, index) => <RecomendItem key={`PlayList-${index}`}/>)
      )
    
    return(
        <div className="Recomendations">
            <div className="recomendations-content">
                <h4>Title</h4>
                <div className="recomendations-list">
                    {fillPlayLit()}
                </div>
            </div>
        </div>
    )
}
export default Recomendations;