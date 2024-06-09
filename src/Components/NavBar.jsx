import React, { useContext } from 'react';
import './NavBar.scss';
import { AuthContext } from '../Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <nav className="navbar">
            <div className="logo">Media Co</div>
            <ul className="nav-links">
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default NavBar;
