import React, { Component } from 'react';
import './RegistrationHeader.css';
import Logo from './festies-logo-1.png';

class RegistrationHeader extends Component {
    render() {
        return (
            <div className="reg-header-holder">
                <img className="logo-for-header-reg" alt="logo" src={Logo} />
                <h3 className="Registrationh3">Complete Your User Profile</h3>
            </div>
        );
    }
}

export default RegistrationHeader;