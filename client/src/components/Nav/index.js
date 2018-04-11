import React from 'react';
import festiesLogo from './Festies.jpg';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="logo-container">
                <img className="festies-logo" alt="logo" src={festiesLogo} />
            </div>
        </nav>
    );
};

export default Nav;