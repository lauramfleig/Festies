import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import './UVparallaxOne.css';
import UserInfo from './UserInfo/UserInfo.js';
import axios from 'axios';

class UVparallaxOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userEmail: sessionStorage.getItem('email'),
            screen_name: '',
            name: '',
            age: '',
            gender: '',
            about: '',
            favFestival: ''
        };
    }

componentWillMount = () => {
    const email = {
        email: this.state.userEmail
    };
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    
    axios.post('/api/user_data', email)
    .then((response) => {
        let responseData = response
        let returnedData = response.data[0]
        this.setState({
            userData: returnedData,
            screen_name: returnedData.user_screen_name,
            name: returnedData.username,
            age: returnedData.age,
            gender: returnedData.gender,
            about: returnedData.about_description
        });
        // console.log(this.state.userData.data[0].user_screen_name);
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    });

}
    
    render() {
        if (localStorage.getItem('jwtToken')) {
        return (
            <div className="uv-parallax-one">
                <UserInfo 
                name={(this.state.name)}
                userName={(this.state.screen_name)}
                age={(this.state.age)}
                gender={(this.state.gender)}
                about={(this.state.about)}/>
                {/* screenName={this.state.userData.}/> */}
                
            </div>
        );
    } else {
            return (<Redirect to={"/"} />);
    }
    }
}

export default UVparallaxOne;