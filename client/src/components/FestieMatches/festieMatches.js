import React, { Component } from 'react';
import axios from 'axios';
import './festieMatches.css';
import SelectMatchBtn from './SelectMatchBtn/SelectMatchBtn.js'


class festieMatches extends Component {

    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            matchesDisplayed: false,
            userData: [],
            matchGender: ''
        };

    }

    
    componentWillMount() {
        const matchesQuery = {
            displayName: sessionStorage.getItem('currentFestival')
        };

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.post('/api/find_matches', matchesQuery)
        .then((response) => {
            console.log(response);
            this.setState({
                userData: response.data,
                matchesDisplayed: true,
                matchGender: response.data[0].gender
            })

            console.log(this.state.userData)

        })
        .catch((error) => {
            console.log(error);
        });
    }


    
    handleMatch = (id) => {
        // map through the current state of matches, find the one
        const newUserData = this.state.userData.filter(user => {
            return user._id !== id
        })

        this.setState({ userData: newUserData })
     
        // with the id that was just matched and filter him out
        // then set the state to the new filtered array
    }

    determineGender = (gender) => {
        if ('male' === gender) {
            return <i className="fa fa-mars"></i>
                } else if ('female' === gender) {
                    return <i className="fa fa-venus"></i>
                } else { ('other' === gender) 
                    return <i className="fa fa-intersex"></i>
                }
    }

    render() {



        return (
            <div className="match-holder-div">
                {this.state.matchesDisplayed ?
                    <ul className="match-item">
                        {this.state.userData.map((match, i) => {

                            return (<li key={i} className="match-card">
                                <div className="card-header">
                                <div className="score-div">
                                    <h1 className="score-header">Match Score:</h1>
                                </div>
                                </div>
                                <img className="profile-pic" alt="prof-pic" src={match.imageURL} />
                                <div className="match-info">
                                    <h2 className="match-name">{match.username}, {match.age}</h2>
                                    <div className="gender-holder">
                                        {this.determineGender(match.gender)}
                                    </div>
                                </div>
                                <div className="second-half-card">
                                    <h1 className="festival-header">Top Artists Selected</h1>
                                        <div className="lineup-holder">
                                            <ul className="festival-lineup">
                                                {match.festival_data[0].lineupAnswers.map((match, i) => {
                                                    return (
                                                        <div>
                                                            <li key={i} className="festival-item">{match}
                                                            </li>
                                                        </div>)
                                                })}
                                            </ul>
                                        </div>
                                </div>

                                <SelectMatchBtn
                                    id={match._id}
                                    onMatchAdded={this.handleMatch}
                                />
                            </li>)
                        })}
                    </ul>
                    :
                    null
                }  
            </div>
        );
    }
}

export default festieMatches;