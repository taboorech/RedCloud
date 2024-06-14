import { useEffect, useRef } from "react";
import "./Recomendations.scss";

function Recomendations({ title, children }) {

  const scrollElementRef = useRef();

  useEffect(() => {
    scrollElementRef.current.addEventListener('wheel', function(event) {
      event.preventDefault();
      scrollElementRef.current.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <div className="Recomendations">
      <h4>{ title }</h4>
      <div className="recomendations-content without-scrollbar" ref={scrollElementRef}>
        <div className="recomendations-list">
          { children }

        </div>
      </div>
    </div>
  )
}
export default Recomendations;