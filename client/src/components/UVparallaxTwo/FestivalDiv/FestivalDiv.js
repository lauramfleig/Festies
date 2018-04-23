import React, { Component } from 'react';
import './FestivalDiv.css'
import FestivalList from './FestivalList.js'

class FestivalDiv extends Component {

    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {
    //     //axios call to get festival information out of DB
    // }

    render() {
        return (
            <div>
            <div className="festival-div-header">Festivals You're Attending</div>
            <div className="festival-div">
               <FestivalList />
            </div>
            </div>
        );
    }
}

export default FestivalDiv;