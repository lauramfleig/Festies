import React, { Component } from 'react';
import './Header.css';
import Logo from './festies-logo-1.png';
import LogoutBtn from './LogoutBtn/LogoutBtn.js';
import Welcome from './Welcome/Welcome.js'

class Header extends Component {
    render() {
        return (
            <div className="header-holder">
                <img className="logo-for-header" alt="logo" src={Logo} />
                <Welcome />

                <LogoutBtn />  
            </div>
        );
    }
}

export default Header;