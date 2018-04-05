import React from 'react';
import festiesLogo from './Festies.jpg';
import './Logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <img className="festies-logo" alt="logo" src={festiesLogo} />
        </div>
    );
};

export default Logo;