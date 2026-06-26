import { Link } from "react-router-dom";
import "../styles/albumcard.css";
import albumImage from "../assets/album.jpg";

export default function AlbumCard({ album }) {
    return (
        <Link to={`/album/${album._id}`}>
            <div className="album-card">

            <img
                src={albumImage}
                alt={album.title}
                className="album-image"
            />

                <h3>{album.title}</h3>

                <p>{album.artist.username}</p>

            </div>
        </Link>
    );
}