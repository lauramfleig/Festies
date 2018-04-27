


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
                <button className="btn" onClick={this.deleteAndStore}><i className="fa fa-user-plus"></i></button>
                {/* data-festival={this.props.displayName} onClick={this.storeFest}>Find Matches!</button> */}
            </div>
        );
    }
}

export default SelectMatchBtn;