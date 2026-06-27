import { useEffect, useState } from "react";
import { getFavorites } from "../services/music.service";
import SongCard from "../components/SongCard";
import "../styles/home.css";

export default function Favorites() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {

        const fetchFavorites = async () => {

            try {

                const response = await getFavorites();
                setSongs(response.favorites);

            } catch (err) {

                console.log(err);

            }

        };

        fetchFavorites();

    }, []);

    return (

        <div className="home">

            <section>

                <div className="section-header">

                    <h2>Favorites</h2>

                </div>

                {
                    songs.length === 0 ? (

                        <p>No favorite songs yet.</p>

                    ) : (

                        songs.map((song, index) => (

                            <SongCard
                                key={song._id}
                                song={song}
                                songs={songs}
                                index={index}
                            />

                        ))

                    )
                }

            </section>

        </div>

    );

}