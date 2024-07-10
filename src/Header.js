import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const handleHomeClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault(); 
        }
    };

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" onClick={handleHomeClick} className="header-button">HOME</Link>
                <Link to="/projects" className="header-button">PROJECTS</Link>
                <Link to="/creative" className="header-button">CREATIVE</Link>
                <Link to="/about" className="header-button">ABOUT</Link>
            </div>
        </header>
    );
}

export default Header;