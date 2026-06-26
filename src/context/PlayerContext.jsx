import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {

        const [queue, setQueue] = useState([]);
        const [currentSongIndex, setCurrentSongIndex] = useState(-1);

        const currentSong =
            currentSongIndex >= 0
                ? queue[currentSongIndex]
                : null;

        const [isPlaying, setIsPlaying] = useState(false);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
    return (

        <PlayerContext.Provider
            value={{
                queue,
                setQueue,

                currentSongIndex,
                setCurrentSongIndex,

                currentSong,

                isPlaying,
                setIsPlaying,

                currentTime,
                setCurrentTime,

                duration,
                setDuration
            }}
        >
            {children}
        </PlayerContext.Provider>

    );

}

export function usePlayer(){

    return useContext(PlayerContext);

}