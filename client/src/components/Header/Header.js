import React, { Component } from 'react';
import './Header.css';
import Logo from './festies-logo-1.png';
import LogoutBtn from './LogoutBtn/LogoutBtn.js';
import Welcome from './Welcome/Welcome.js';
import axios from "axios"

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userEmail: sessionStorage.getItem('email'),
           
        };
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        sessionStorage.removeItem('email');
        window.location.reload();
    }
    componentWillMount = () => {
        const email = {
            email: this.state.userEmail
        };

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.post('/api/user_data', email)
            .then((response) => {
                console.log(response)
                let returnedData = response.data[0]
                this.setState({
                    userData: returnedData,
                    name: returnedData.username,
                    image: returnedData.imageURL
                    
                });
                
            })
            .catch((error) => {
                console.log(error);
            });
        }
    
    render() {
        return (
            <div className="header-holder">
                <div className="logo-holder">
                    <img className="logo-for-header" alt="logo" src={Logo} />
                </div>
                <Welcome 
                userName={(this.state.name)}
                image={(this.state.image)}
                />

                <LogoutBtn handleClick={this.logout}/>  
            </div>
        );
    }
}

export default Header;