import { useEffect, useRef } from "react";
import { usePlayer } from "../context/PlayerContext";
import "../styles/player.css";
import musicImage from "../assets/music.png";
import {
    FaPlay,
    FaPause,
    FaStepBackward,
    FaStepForward
} from "react-icons/fa";


    function formatTime(time) {

        if (!time) return "0:00";

        const minutes = Math.floor(time / 60);

        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;

    };

export default function Player() {

        const {
            queue,
            currentSongIndex,
            setCurrentSongIndex,
            currentSong,

            isPlaying,
            setIsPlaying,

            currentTime,
            setCurrentTime,

            duration,
            setDuration
        } = usePlayer();

    const audioRef = useRef(null);


    
        useEffect(() => {

            if (currentSong && audioRef.current) {

                audioRef.current.load();

                if (isPlaying) {

                    audioRef.current.play();

                }

            }

        }, [currentSong]);

    const togglePlay = () => {
    
        if (!audioRef.current) return;

        if (isPlaying) {

            audioRef.current.pause();
            setIsPlaying(false);

        }

        else {

            audioRef.current.play();

            setIsPlaying(true);

        }

    };


    if (!currentSong) {

        return null;

    }

        const goToPreviousSong = () => {

            if (queue.length === 0) return;

            setCurrentSongIndex(
                (currentSongIndex - 1 + queue.length) % queue.length
            );

        };

        const goToNextSong = () => {

            if (queue.length === 0) return;

            setCurrentSongIndex(
                (currentSongIndex + 1) % queue.length
            );

        };

    return (

        <div className="player">


        <div className="player-header">

            <div className="player-left">

                <img
                    src={musicImage}
                    alt="Music"
                    className="player-image"
                />

                <div className="player-info">

                        <div className="player-title">
                            {currentSong.title.length > 10
                                ? currentSong.title.slice(0, 10) + "..."
                                : currentSong.title}
                        </div>

                    <div className="player-artist">
                        {currentSong.artist.username}
                    </div>

                </div>

            </div>

            <div className="player-controls">

                <button
                    onClick={goToPreviousSong}
                >
                    <FaStepBackward />
                </button>

                <button
                    onClick={togglePlay}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <button
                    onClick={goToNextSong}
                >
                    <FaStepForward />
                </button>

            </div>

        </div>

            <input className="player-slider"
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={(e) => {

                    const time = Number(e.target.value);
                    audioRef.current.currentTime = time;
                    setCurrentTime(time);

                }}
       
            />

            <div className="player-time">
                <span>
                    {formatTime(currentTime)}
                </span>

                <span>
                    {formatTime(duration)}
                </span>
            </div>

            <audio
                ref={audioRef}
                onEnded={goToNextSong}
                src={currentSong.uri}
                onTimeUpdate={() =>
                    setCurrentTime(audioRef.current.currentTime)
                }
                onLoadedMetadata={() =>
                    setDuration(audioRef.current.duration)
                }
            />

        </div>

    );

}