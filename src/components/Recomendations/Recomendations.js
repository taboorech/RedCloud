import { useEffect, useRef } from "react";
import RecomendItem from "./RecomendItem/RecomendItem";
import "./Recomendations.scss";

function Recomendations() {

  const scrollElementRef = useRef();
  const playListArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fillPlayLit = () => (
    playListArr.map((PlayList, index) => <RecomendItem key={`PlayList-${index}`} className={"recommend-item"}/>)
  )

  useEffect(() => {
    scrollElementRef.current.addEventListener('wheel', function(event) {
      event.preventDefault();
      scrollElementRef.current.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <div className="Recomendations">
      <h4>Title</h4>
      <div className="recomendations-content without-scrollbar" ref={scrollElementRef}>
        <div className="recomendations-list">
          {fillPlayLit()}
        </div>
      </div>
    </div>
  )
}
export default Recomendations;