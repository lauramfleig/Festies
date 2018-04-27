import React, { Component } from 'react';
import Matches from '../../components/FestieMatches/festieMatches';
import MatchHeader from '../../components/MatchHeader/MatchHeader.js'

class matches extends Component {
    
    render() {
        return (
            <div className="matches-body">
                <MatchHeader />
                <div className="matches-holder">
                    <Matches />
                </div>
            </div>
        );
    }
}

export default matches;