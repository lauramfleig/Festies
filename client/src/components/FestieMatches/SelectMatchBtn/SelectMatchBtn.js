


import React, { Component } from 'react';
import './SelectMatchBtn.css';

class SelectMatchBtn extends Component {

    constructor(props) {
        super(props);
        
    }

   deleteAndStore = () => {
       const id = this.props.id
       // call the api and store the new match in the friends array
       this.props.onMatchAdded(id)
   }

    render() {
        return (
            <div className="match-btn-container">
                <button className="select-matches-btn" onClick={this.deleteAndStore}>Add Match!</button>
                {/* data-festival={this.props.displayName} onClick={this.storeFest}>Find Matches!</button> */}
            </div>
        );
    }
}

export default SelectMatchBtn;