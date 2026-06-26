import { useEffect, useState } from "react";
import { getAllAlbums, getAllSongs } from "../services/music.service";
import AlbumCard from "../components/AlbumCard";
import SongCard from "../components/SongCard";
import "../styles/home.css";

export default function Home() {
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albumResponse = await getAllAlbums();
                const songResponse = await getAllSongs();

                setAlbums(albumResponse.albums);
                setSongs(songResponse.musics);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home">

            <section>

            <div className="section-header">

                <h2>Albums</h2>

            </div>

            <div className="album-grid">

                {
                    albums.map(album=>(
                        <AlbumCard
                            key={album._id}
                            album={album}
                        />
                    ))
                }

            </div>

            <br />

            <div className="section-header">

                <h2>Songs</h2>

            </div>

            {
                songs.map((song, index) => (

                    <SongCard
                        key={song._id}
                        song={song}
                        songs={songs}
                        index={index}
                    />

                ))
            }
        </section>
        </div>
    );
}