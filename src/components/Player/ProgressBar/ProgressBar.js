import "./ProgressBar.scss";

function ProgressBar(
  {
    onProgressMouseDown, 
    onProgressChange, 
    onProgressMouseUp, 
    progressBarRef,
    progressRef,
    circleRef
  }) {

  const progressBarClickHandler = (event) => { 
    const calculateFunction = (event, line, bar, circle) => {
      let currentProgress = ((event.clientX - bar.offsetLeft) * 100) / bar.offsetWidth;
      if(currentProgress > 100) {
        currentProgress = 100;
      }
      if(currentProgress < 0) {
        currentProgress = 0;
      }
    
      line.style.width = currentProgress + "%";
      circle.style.left = currentProgress + "%";
      
      return currentProgress;
    }
    let currentProgress = calculateFunction(event, progressRef.current, progressBarRef.current, circleRef.current);
    onProgressMouseDown && onProgressMouseDown(currentProgress);
    window.onmousemove = (event) => {
      currentProgress = calculateFunction(event, progressRef.current, progressBarRef.current, circleRef.current);
      onProgressChange && onProgressChange(currentProgress);
    }
    window.onmouseup = () => {
      window.onmousemove = null;
      onProgressMouseUp && onProgressMouseUp(currentProgress);
    }
  };

  return (
    <div className="Progress-bar" ref={progressBarRef} onMouseDown={(event) => progressBarClickHandler(event)}>
      <div className="progress" ref={progressRef}></div>
      <div className="circle" ref={circleRef}></div>
    </div>
  )
}

export default ProgressBar;