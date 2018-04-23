import React, { Component } from 'react';
import './UVparallaxOne.css';
import UserInfo from './UserInfo/UserInfo.js';
import axios from 'axios';

class UVparallaxOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userEmail: sessionStorage.getItem('email')
        };
    }

componentWillMount = () => {
    const email = {
        email: this.state.userEmail
    };
    
    axios.post('/api/user_data', email)
    .then((response) => {
        this.setState({
            userData: response
        });
        console.log(this.state.userData);
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