import api from "../api/axios";

export const getAllSongs = async () => {
    const response = await api.get("/music");
    return response.data;
};

export const getAllAlbums = async () => {
    const response = await api.get("/music/albums");
    return response.data;
};

export const getAlbum = async (albumId) => {
    const response = await api.get(`/music/albums/${albumId}`);
    return response.data;
};

export const uploadMusic = async (formData) => {
    const response = await api.post("/music/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const createAlbum = async (albumData) => {
    const response = await api.post("/music/album", albumData);
    return response.data;
};


export async function getFavorites() {
    const response = await api.get("/music/favorites");
    return response.data;
}

export async function toggleFavorite(musicId) {
    const response = await api.post(`/music/${musicId}/favorite`);
    return response.data;
}