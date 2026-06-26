import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiHome,
    FiUpload,
    FiDisc,
    FiLogOut
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.jfif";



export default function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);


    useEffect(() => {

        const handleClickOutside = (e) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {

                setMenuOpen(false);

            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);


    const handleLogout = async () => {

        try {

            await logout();

            navigate("/login");

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

    <nav className="navbar">

            <Link to="/" className="navbar-logo">

                <img
                    src={logo}
                    alt="VIBE"
                    className="logo-image"
                />

            </Link>

        <div
            className="menu-container"
            ref={menuRef}
        >

            <button
                className="menu-button"
                onClick={() =>
                    setMenuOpen(!menuOpen)
                }
            >

                <img
                    src={menuIcon}
                    alt="Menu"
                    className="menu-icon"
                />

            </button>

            {
                menuOpen && (

                    <div className="dropdown-menu">

                        <Link
                            to="/"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                        >

                            <FiHome />

                            Home

                        </Link>

                        {
                            user?.role === "artist" && (

                                <>

                                    <Link
                                        to="/upload"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >

                                        <FiUpload />

                                        Upload Music

                                    </Link>

                                    <Link
                                        to="/create-album"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >

                                        <FiDisc />

                                        Create Album

                                    </Link>

                                </>

                            )
                        }

                        <button
                            onClick={handleLogout}
                        >

                            <FiLogOut />

                            Logout

                        </button>

                    </div>

                )
            }

        </div>
            
            

        </nav>

    );

}