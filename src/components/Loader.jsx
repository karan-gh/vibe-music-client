import "../styles/Loader.css";

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="equalizer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <p>Loading Vibe Music...</p>
        </div>
    );
}