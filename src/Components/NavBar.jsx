import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Media Co</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;