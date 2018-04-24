import React, { Component } from 'react';
import './UserInfo.css';
import FindFestivalBtn from '../FindFestivalBtn/FindFestivalBtn.js'


class UserInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="header-div">
                    <h1 className="UIheader">Your Profile Information:</h1>
                </div>

                <div className="first-p-content">
                    <div className="user-info-div">
                        <div className="user-info-content">
                        <h3>Name:</h3>
                            <p> {this.props.name}</p>
                        <h3>Username:</h3>
                            <p> {this.props.userName}</p>
                        <h3>Age:</h3>
                            <p> {this.props.age}</p>
                        <h3>Gender:</h3>
                            <p> {this.props.gender}</p>
                        </div>
                    </div>
                    <div className="user-info-div two">
                        <div className="user-info-content">
                            <h3>About:</h3>
                                <p>{this.props.about}</p>
                            <h3>Favorite Festival Experience:</h3>
                                <p>{this.props.favFestival}</p>
                        </div>
                    
                    </div>
                </div>

                <div className="second-p-content">
                    <div className="find-festivals-div">
                    </div>
                    <FindFestivalBtn />
                </div>


            </div>
        );
    }
}

export default UserInfo;