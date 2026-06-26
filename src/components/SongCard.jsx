import { usePlayer } from "../context/PlayerContext";
import "../styles/songcard.css";
import musicImage from "../assets/music-icon.png";

export default function SongCard({ song, songs, index }) {

    const {
        setQueue,
        setCurrentSongIndex,
        setIsPlaying
    } = usePlayer();

    const handlePlay = () => {

        setQueue(songs);

        setCurrentSongIndex(index);

        setIsPlaying(true);

    };

    return (

        <div
            className="song-card"
            onClick={handlePlay}
            >

            <div className="song-left">

                <img
                    src={musicImage}
                    alt="Music"
                    className="song-image"
                />

                <div className="song-info">

                    <h3>{song.title}</h3>

                    <p>{song.artist.username}</p>

                </div>

            </div>

        </div>

    );

}