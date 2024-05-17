import "./SongImage.scss"
import songImage from "../Song.png"
const SongImage = () => {
    return (
        <img src={songImage} alt="Song" className="song-image" />
    );
};

export default SongImage;
