import { usePlayer } from "../context/PlayerContext";
import "../styles/songcard.css";
import musicImage from "../assets/music-icon.png";
import { toggleFavorite } from "../services/music.service";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { FiHeart, FiTrendingUp } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import likeSound from "../assets/like.mp3";
import dislikeSound from "../assets/dislike.mp3";
import { useRef } from "react";


export default function SongCard({ song, songs, index }) {

    const {
        setQueue,
        setCurrentSongIndex,
        setIsPlaying
    } = usePlayer();

    const { favorites, setFavorites } = useAuth();
    const isFavorite = favorites.some(
    fav => fav._id === song._id
    );

        const handlePlay = () => {

            setQueue(songs);

            setCurrentSongIndex(index);

            setIsPlaying(true);

        };

        const likeAudio = useRef(new Audio(likeSound));
        const dislikeAudio = useRef(new Audio(dislikeSound));

        const handleFavorite = async (e) => {

            e.stopPropagation();

            try {

                await toggleFavorite(song._id);

                if (isFavorite) {

                    setFavorites(
                        favorites.filter(f => f._id !== song._id)
                    );
                    dislikeAudio.current.currentTime = 0;
                    dislikeAudio.current.play().catch(() => {});

                } else {

                    setFavorites([
                        ...favorites,
                        song
                    ]);
                    likeAudio.current.currentTime = 0;
                    likeAudio.current.play().catch(() => {});

                }


            } catch (err) {

                toast.error(
                    err.response?.data?.message ||
                    "Something went wrong"
                );

            }

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

                <button
                    className="favorite-button"
                    onClick={handleFavorite}
                >
                    
                    {isFavorite ? <FaHeart color="#ff465b" /> : <FiHeart />}
                </button>

        </div>

    );

}