import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            password: formData.password,
        };

        if (formData.identifier.includes("@")) {
            credentials.email = formData.identifier;
        } else {
            credentials.username = formData.identifier;
        }

        try {
            await login(credentials);
            toast.success("Login Successful");
            navigate("/");
        } catch (err) {
            toast.error(err.response?.data?.message || "Login Failed");
        }
    };

    return (

        <div className="login-container">

            <form
                className="login-card"
                onSubmit={handleSubmit}
            >

                <h1>Login</h1>

                <div className="login-group">

                    <label>

                        Enter username

                    </label>

                    <input
                        type="text"
                        name="identifier"
                        placeholder="Enter username or email"
                        value={formData.identifier}
                        onChange={handleChange}
                    />

                </div>

                <div className="login-group">

                    <label>

                        Password

                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                </div>

                <button
                    className="login-button"
                    type="submit"
                >
                    Login
                </button>

                <div className="register-link">

                    Don't have an account?{" "}

                    <Link to="/register">

                        Register

                    </Link>

                </div>

            </form>

        </div>

    );

}