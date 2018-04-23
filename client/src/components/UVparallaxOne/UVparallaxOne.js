import React, { Component } from 'react';
import './UVparallaxOne.css';
import UserInfo from './UserInfo/UserInfo.js';
import axios from 'axios';

class UVparallaxOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userEmail: sessionStorage.getItem('user_email')
        };
    }

componentWillMount() {
    const email = this.state.userEmail;
    axios.get('/api/userData', {
        params: email
    })
    .then((response) => {
        console.log(response);
        this.setState({
            userData: response
        });
    })
    .catch((error) => {
        console.log(error);
    });

}
    
    render() {
        return (
            <div className="uv-parallax-one">
                <UserInfo screenName="melissa" />
                {/* screenName={this.state.userData.}/> */}
                
            </div>
        );
    }
}

export default UVparallaxOne;