import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../services/music.service";
import SongCard from "../components/SongCard";
import albumImage from "../assets/album.jpg";
import "../styles/album.css";

export default function Album() {
    const { albumId } = useParams();

    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const response = await getAlbum(albumId);
                setAlbum(response.album);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAlbum();
    }, [albumId]);

    if (!album) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="album-page">

            <div className="album-header">

                <img
                    src={albumImage}
                    alt={album.title}
                    className="album-cover"
                />

                <div className="album-details">

                    <p className="album-type">
                        Album
                    </p>

                    <h1>{album.title}</h1>

                    <p className="album-artist">
                        {album.artist.username}
                    </p>

                    <p className="album-meta">
                        {album.musics.length} {album.musics.length === 1 ? "Song" : "Songs"}
                    </p>

                </div>

            </div>

            <h3 className="tracks-heading">
                TRACKS
            </h3>

            <div className="section-header"></div>

            <div className="album-tracks">

                {
                    album.musics.map((song, index) => (

                        <SongCard
                            key={song._id}
                            song={song}
                            songs={album.musics}
                            index={index}
                        />

                    ))
                }

            </div>

        </div>
    );

}