import React, { Component } from 'react';
import TicketButton from './TicketButton.js';
import MatchesButton from './MatchesButton.js'
import './FestivalDiv.css'

class FestivalDiv extends Component {

    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {
    //     //axios call to get festival information out of DB
    // }

    render() {
        return (
            <div className="fesitval-div">
                <ul className="festival-list">
                    <li className="festival-name">Festival:</li>
                    {/* this.props.festivalname */}
                    <TicketButton />
                    <MatchesButton />
                </ul>
            </div>
        );
    }
}

export default FestivalDiv;