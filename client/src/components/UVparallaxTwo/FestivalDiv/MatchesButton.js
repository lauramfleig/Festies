


import React, { Component } from 'react';
import './MatchesButton.css';

class MatchesButton extends Component {

    constructor(props) {
        super(props);
    }

    storeFest(event) {
        sessionStorage.setItem('currentFestival', event.target.getAttribute('data-festival'));
    }

    render() {
        return (
            <div className="matches-btn-container">
                <a href="/matches"><button className="matches-btn" data-festival={this.props.displayName} onClick={this.storeFest}>Find Matches!</button></a>
            </div>
        );
    }
}

export default MatchesButton;



