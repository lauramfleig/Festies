import React, { Component } from 'react';
import './FestivalSurveyHeader.css';
import Logo from './festies-logo-1.png';

class FestivalSurveyHeader extends Component {
    render() {
        return (
            <div className="fest-header-holder">
                <img className="logo-for-header-fest" alt="logo" src={Logo} />
                <h3 className="FestivalSurveyh3">Find Your Festival</h3>
            </div>
        );
    }
}

export default FestivalSurveyHeader;