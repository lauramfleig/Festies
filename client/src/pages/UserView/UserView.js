import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import UVparallaxOne from '../../components/UVparallaxOne/UVparallaxOne.js'

class UserView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //function that will bring user back to homepage after logout button is clicked
            renderHomePage: false,
            //function that will open window to buy ticket from songkick
            openSongkick: false,
            //function that will open festival selection survey
            renderFestivalSurvey: false,
            //function that will link to match page 
            renderMatches: false
        }
    }
    

    ///WRITE FUNCTIONS HERE-------------------------------------------------

    render() {
        return (
            <div className="userView-container">
                <Header />
                <UVparallaxOne />
                
            </div>
        );
    }
}

export default UserView;