import React, { Component } from 'react';
import './Header.css';
import Logo from './festies-logo-1.png';
import LogoutBtn from './LogoutBtn/LogoutBtn.js'

class Header extends Component {
    render() {
        return (
            <div className="header-holder">
                <img className="logo-for-header" alt="logo" src={Logo} />
                <LogoutBtn />  
            </div>
        );
    }
}

export default Header;