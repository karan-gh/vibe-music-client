import { createContext, useContext, useEffect, useState } from "react";
import {
    login as loginService,
    logout as logoutService,
    getMe,
} from "../services/auth.service";
import { getFavorites } from "../services/music.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
                const favoriteData = await getFavorites();
                setFavorites(favoriteData.favorites);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        const data = await loginService(credentials);
        setUser(data.user);
        const favoriteData = await getFavorites();
        setFavorites(favoriteData.favorites);   

        return data;
    };

    const logout = async () => {
        await logoutService();
        setFavorites([]);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                favorites,
                setFavorites
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}