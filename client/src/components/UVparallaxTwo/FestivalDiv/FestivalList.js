import React, { Component } from 'react';
import './FestivalList.css';
import TicketButton from './TicketButton.js';
import MatchesButton from './MatchesButton.js'

class FestivalList extends Component {
    render() {
        return (
            <div>
                <ul className="festival-list">
                    <li className="festival-name">Name: </li>
                    {/* this.props.festivalname */}
                    <TicketButton />
                    <MatchesButton />
                </ul>
                
            </div>
        );
    }
}

export default FestivalList;

