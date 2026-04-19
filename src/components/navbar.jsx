import React from "react";
import './../styles/navbar.css';
import logoImage from './../assets/images/champyinzLogoCut.png'; // Importing the image
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate(); // Initialize useNavigate outside of the event handler

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">
                    <img src={logoImage} alt="Champyinz Logo" className="navbar-logo" />

                </a>
                <ul className="nav-links">
                    <li>
                        <a onClick={() => navigate("/about")} active="true">
                            About
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/services")} active="true">
                            Services
                        </a>
                    </li>
                    <li>
                        <a onClick={() => navigate("/testimonials")} active="true">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a onClick={() => navigate("/contact")} active="true">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#mission" className="cta-btn-nav">
                            Join Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
