import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Album from "../pages/Album";
import UploadMusic from "../pages/UploadMusic";
import CreateAlbum from "../pages/CreateAlbum";
import Favorites from "../pages/Favorites";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes() {
    return (
            <BrowserRouter>
                <Routes>

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<MainLayout />}>

                            <Route path="/" element={<Home />} />

                            <Route path="/upload" element={<UploadMusic />} />

                            <Route path="/create-album" element={<CreateAlbum />} />

                            <Route path="/album/:albumId" element={<Album />} />

                            <Route path="/favorites" element={<Favorites/>} />

                        </Route>
                    </Route>

                </Routes>
            </BrowserRouter>
    );
}