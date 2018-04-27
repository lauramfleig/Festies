import React, { Component } from 'react';
import './MatchHeader.css';
import festiesLogo from './festies-logo-1.png';
import LogoutBtn from '../Header/LogoutBtn/LogoutBtn.js'
import BackBtn from '../BackButton/BackButton.js'

class MatchHeader extends Component {
constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userEmail: sessionStorage.getItem('email'),
           
        };
    }


goBackPage = () => {
    window.history.go(-1)
}

logout = () => {
    localStorage.removeItem('jwtToken');
    sessionStorage.removeItem('email');
    window.location.reload();
}

render() {
    return (
            <div className="match-header">
                <BackBtn handleClick={this.goBackPage} />
                <img className="logo" alt="logo" src={festiesLogo}/>
                <LogoutBtn handleClick={this.logout}/>
                
            </div>
        );
}
}

export default MatchHeader;