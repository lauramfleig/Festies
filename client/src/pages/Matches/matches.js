import React, { Component } from 'react';
import Matches from '../../components/FestieMatches/festieMatches';
import MatchItem from '../../components/MatchItem/MatchItem.js'

class matches extends Component {
    
    render() {
        return (
            <div className="matches-body">
                <div className="matches-holder">
                    <Matches />
                </div>
            </div>
        );
    }
}

export default matches;