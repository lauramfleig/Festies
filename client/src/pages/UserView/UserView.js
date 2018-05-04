import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import UVparallaxOne from '../../components/UVparallaxOne/UVparallaxOne.js'
import UVparallaxTwo from '../../components/UVparallaxTwo/UVparallaxTwo';
import Footer from '../../components/Footer';
// import { Router } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';

class UserView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    

    ///WRITE FUNCTIONS HERE-------------------------------------------------

    renderHomePage = () => {
        this.setState({
            renderHomePage: true
        })
    }


    render() {

        return (
            <div className="userView-container">
                <Header />
                <UVparallaxOne />
                <UVparallaxTwo />
                <Footer />
            </div>
        );
    }
}

export default UserView;