import React from 'react';
import festiesLogo from './festies-transparent.png';
import './Nav.css';

const Logo = () => {
    return (    
        <div className="logo-div">
            <img className="festies-logo" alt="logo" src={festiesLogo} />
        </div>
    );
}

export default Logo;