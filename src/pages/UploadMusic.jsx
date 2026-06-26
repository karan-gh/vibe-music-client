import { useState } from "react";
import { uploadMusic } from "../services/music.service";
import "../styles/uploadmusic.css";
import toast from "react-hot-toast";

export default function UploadMusic() {
    const [title, setTitle] = useState("");
    const [musicFile, setMusicFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!musicFile) {
            toast.error("Please select a music file.");
            return;
        }

        const formData = new FormData();

        formData.append("title", title);
        formData.append("music", musicFile);

        try {
            const data = await uploadMusic(formData);

            toast.success(data.message);

            setTitle("");
            setMusicFile(null);

            e.target.reset();
        } catch (err) {
            console.log(err);

            toast.error(
                err.response?.data?.message ||
                "Upload Failed"
            );
        }
    };

    return (

        <div className="upload-container">

            <form
                className="upload-card"
                onSubmit={handleSubmit}
            >

                <h1>Upload Music</h1>

                <div className="upload-group">

                    <label>

                        Song Title

                    </label>

                    <input
                        type="text"
                        placeholder="Enter song title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </div>

                <div className="upload-group">

                    <label>

                        Choose Music File

                    </label>

                    <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => setMusicFile(e.target.files[0])}
                    />

                </div>

                <button
                    className="upload-button"
                    type="submit"
                >
                    Upload Music
                </button>

            </form>

        </div>

    );
}