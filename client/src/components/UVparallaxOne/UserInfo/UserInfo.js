import React, { Component } from 'react';
import './UserInfo.css';
import FindFestivalBtn from '../FindFestivalBtn/FindFestivalBtn.js'


class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="header-div">
                    <h1 className="UIheader">Your Profile Information:</h1>
                </div>

                <div className="first-p-content">
                    <div className="user-info-div"></div>
                    <div className="user-info-div"></div>
                </div>

                <div className="second-p-content">
                    <div className="find-festivals-div">
                        <FindFestivalBtn />
                    </div>
                </div>


            </div>
        );
    }
}

export default UserInfo;