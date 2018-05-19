import React, { Component } from 'react';
import './FestivalSurveyHeader.css';
import newlogo from './new-logo.png'

class FestivalSurveyHeader extends Component {
    render() {
        return (
            <div className="fest-header-holder">
                <img className="logo-2" alt="log2" src={newlogo} />
                
            </div>
        );
    }
}

export default FestivalSurveyHeader;