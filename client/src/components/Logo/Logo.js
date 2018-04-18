import React from 'react';
import festiesLogo from './festies-logo-1.png';
import './Logo.css';


const Logo = () => {
    return (
        <div>
            <img className="festies-logo" alt="logo" src={festiesLogo} />
        </div>
    );
}

export default Logo;