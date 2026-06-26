import { createContext, useContext, useEffect, useState } from "react";
import {
    login as loginService,
    logout as logoutService,
    getMe,
} from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
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
        return data;
    };

    const logout = async () => {
        await logoutService();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}