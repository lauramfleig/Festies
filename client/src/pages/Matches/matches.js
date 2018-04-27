import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import FestieMatches from '../../components/FestieMatches/festieMatches';
import MatchHeader from '../../components/MatchHeader/MatchHeader.js'

class matches extends Component {
    
    render() {
        if (localStorage.getItem('jwtToken')) {
        return (
            <div className="matches-body">
                <MatchHeader />
                <div className="matches-holder">
                    <FestieMatches />
                </div>
            </div>
        );
    } else {
            return (<Redirect to={"/"} />);
    }
    }
}

export default matches;