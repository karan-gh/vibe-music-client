import { useEffect, useState } from "react";
import {
    getAllSongs,
    createAlbum
} from "../services/music.service";
import "../styles/createalbum.css";
import toast from "react-hot-toast";



export default function CreateAlbum() {

    const [title, setTitle] = useState("");

    const [songs, setSongs] = useState([]);

    const [selectedSongs, setSelectedSongs] = useState([]);

    useEffect(() => {

        const fetchSongs = async () => {

            try {

                const response = await getAllSongs();

                setSongs(response.musics);

            } catch (err) {

                console.log(err);

            }

        }

        fetchSongs();

    }, []);

    const handleCheckboxChange = (songId) => {

        if (selectedSongs.includes(songId)) {

            setSelectedSongs(

                selectedSongs.filter(
                    id => id !== songId
                )

            );

        } else {

            setSelectedSongs([
                ...selectedSongs,
                songId
            ]);

        }

    }

    const handleCreateAlbum = async () => {

        try {

            const data = await createAlbum({

                title,

                musics: selectedSongs

            });

            toast.success(data.message);

            setTitle("");

            setSelectedSongs([]);

        }

        catch(err){

            toast.error(
                err.response?.data?.message || "Enter Album Title"
            );

        }

    }



    return (

        <div className="create-album-container">

            <div className="create-album-card">

                <h1>Create Album</h1>

                <div className="create-group">

                    <label>

                        Album Title

                    </label>

                    <input
                        type="text"
                        placeholder="Enter album title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </div>

                <div className="create-group">

                    <label>

                        Select Songs

                    </label>

                    {

                        songs.map((song)=>(

                            <label
                                key={song._id}
                                className="song-select"
                            >

                                <input
                                    type="checkbox"
                                    checked={selectedSongs.includes(song._id)}
                                    onChange={() => handleCheckboxChange(song._id)}
                                />

                                <div>

                                    <strong>{song.title}</strong>

                                    <div
                                        style={{
                                            color:"#b3b3b3",
                                            fontSize:"14px"
                                        }}
                                    >
                                        {song.artist.username}
                                    </div>

                                </div>

                            </label>

                        ))

                    }

                </div>

                <button
                    className="create-button"
                    onClick={handleCreateAlbum}
                >

                    Create Album

                </button>

            </div>

        </div>

    );

}