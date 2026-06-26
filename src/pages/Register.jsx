import { useState } from "react";
import { register } from "../services/auth.service";
import "../styles/register.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await register(formData);
            console.log(data);
            toast.success(data.message);
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Registration failed");
        }
    };

    return (

        <div className="register-container">

            <form
                className="register-card"
                onSubmit={handleSubmit}
            >

                <h1>Register</h1>

                <div className="register-group">

                    <label>

                        Username

                    </label>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                </div>

                <div className="register-group">

                    <label>

                        Email

                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                </div>

                <div className="register-group">

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

                <div className="register-group">

                    <label>

                        Account Type

                    </label>

                    <div className="role-options">

                        <label
                            className={`role-card ${
                                formData.role === "user" ? "active" : ""
                            }`}
                        >

                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={formData.role === "user"}
                                onChange={handleChange}
                            />

                            <span>User</span>

                        </label>

                        <label
                            className={`role-card ${
                                formData.role === "artist" ? "active" : ""
                            }`}
                        >

                            <input
                                type="radio"
                                name="role"
                                value="artist"
                                checked={formData.role === "artist"}
                                onChange={handleChange}
                            />

                            <span>Artist</span>

                        </label>

                    </div>

                </div>

                <button
                    className="register-button"
                    type="submit"
                >

                    Register

                </button>

                <div className="register-link">

                    Already have an account?{" "}

                    <Link to="/login">

                        Login

                    </Link>

                </div>

            </form>

        </div>

    );

}