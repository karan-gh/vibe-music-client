import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./styles/global.css";
import { PlayerProvider } from "./context/PlayerContext";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>

            <PlayerProvider>

                <App />
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            duration: 2500,
                            style: {
                                background: "#181818",
                                color: "#fff",
                                border: "1px solid #333"
                            }
                        }}
                    />

            </PlayerProvider>

        </AuthProvider>
    </React.StrictMode>
);