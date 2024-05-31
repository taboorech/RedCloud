import { useState, useEffect } from "react";

function useAudio() {
  const [audio] = useState(new Audio());
  const [source, setSource] = useState("");
  const [playing, setPlaying] = useState(false);
  const [currentTime] = useState(0);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.src = source;
  }, [audio, source]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [audio, playing, source, currentTime, toggle, setSource];
}

export default useAudio;