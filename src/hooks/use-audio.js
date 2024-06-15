import { useState, useEffect, useCallback } from "react";
import mainInstance from "../api/mainInstance";

function useAudio() {
  const [audio] = useState(new Audio());
  const [source, setSource] = useState(localStorage.getItem("currentSong") || ""); 
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(+localStorage.getItem("currentTime") || 0);
  const [isMuted, setIsMuted] = useState(localStorage.getItem("audioPlayerMuted") === "true");
  const [volume, setVolume] = useState(+localStorage.getItem("audioPlayerVolume") || 1);
  const [duration, setDuration] = useState(0);
  const [playlist, setPlaylist] = useState(JSON.parse(localStorage.getItem("currentPlaylist")) || []);
  const [songId, setSongId] = useState(localStorage.getItem("currentSongId") || "");

  const toggle = () => !!source.length && setPlaying(!playing);

  const pause = () => !!source.length && setPlaying(false);
  const play = () => !!source.length && setPlaying(true);

  const currentSongIndex = useCallback(() => playlist.findIndex(songInfo => (mainInstance.defaults.baseURL + songInfo.songUrl) === audio.src.replaceAll("%20", " ")), [audio.src, playlist]);

  const currentTimeChange = useCallback((value) => {
    audio.currentTime = value;
    setCurrentTime(value);
  }, [audio]);

  useEffect(() => {
    const time = +localStorage.getItem("currentTime");
    audio.currentTime = time;
    setCurrentTime(time);
    audio.addEventListener("loadeddata", () => audio.addEventListener("loadeddata", () => setPlaying(true)));
    audio.removeEventListener("loadeddata", () => audio.addEventListener("loadeddata", () => setPlaying(true)));
  }, [audio]);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    audio.muted = isMuted;
  }, [audio, isMuted]);

  useEffect(() => {
    playing && !!source.length ? audio.play() : audio.pause();
  }, [audio, playing, source.length]);

  useEffect(() => {
    audio.src = source;
    setDuration(audio.duration);
    localStorage.setItem("currentSong", source);
  }, [audio, source]);

  useEffect(() => {
    const onEndedFunc = () => {
      if(!playlist.length) {
        return setPlaying(false);
      }

      const nextSong = currentSongIndex() + 1;
      if(nextSong >= playlist.length) {
        return setPlaying(false);
      }

      setSource(mainInstance.defaults.baseURL + playlist[nextSong].songUrl);
      setSongId(playlist[nextSong]._id);
      setPlaying(false);
      audio.addEventListener("loadeddata", () => setPlaying(true));
      audio.removeEventListener("loadeddata", () => setPlaying(true));
    }

    audio.addEventListener('ended', () => onEndedFunc());
    return () => {
      audio.removeEventListener('ended', () => onEndedFunc());
    };
  }, [audio, playlist, currentSongIndex]);

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      localStorage.setItem("currentTime", currentTime);
    })

    audio.addEventListener("loadeddata", () => {
      setDuration(audio.duration);
    })
  }, [audio, currentTime]);

  useEffect(() => {
    localStorage.setItem("currentSongId", songId);
  }, [songId]);

  return {
    playing, 
    currentTime: audio.currentTime, 
    volume, 
    setVolume, 
    isMuted, 
    setIsMuted, 
    toggle, 
    setSource, 
    source, 
    currentTimeChange, 
    duration, 
    setPlaylist,
    pause, 
    play,
    songId,
    setSongId,
    playlist,
    currentSongIndex
  };
}

export default useAudio;