import React, { Component } from 'react';
import axios from 'axios';
import './UserViewMatches.css';



class UserViewMatches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: sessionStorage.getItem('email')
        };
    }

    componentDidMount = () => {


        const email = {
            email: this.state.userEmail
        };
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/user_data', email)
            .then((response) => {
                this.setState({
                    userData: response,
                    renderUserMatches: true,
                    friendsArray: response.data[0].friends

                });
                console.log(this.state.friendsArray);

            })
            .catch((error) => {
                console.log(error);
            });

    }



    determineGender = (gender) => {
        if ('male' === gender) {
            return <i className="fa fa-mars"></i>
        } else if ('female' === gender) {
            return <i className="fa fa-venus"></i>
        } else {
            ('other' === gender)
            return <i className="fa fa-intersex"></i>
        }
    }

    render() {


        return (
            
            <div>
            <div className="UV-matches-section">Your Matches
            </div>
            <div className="match-holder-div">
                {this.state.renderUserMatches ?
                    <ul className="match-item">
                        {this.state.friendsArray.map((friend, i) => {

                            return (<li key={i} className="match-card">
                                <div className="card-header">
                                    <div className="score-div">
                                        <h1 className="score-header">Match Score:</h1>
                                    </div>
                                </div>
                                <img className="profile-pic" alt="prof-pic" src={friend.image} />
                                <div className="match-info">
                                    <h2 className="match-name">{friend.name}, {friend.age}</h2>
                                    <div className="gender-holder">
                                        {this.determineGender(friend.gender)}
                                    </div>
                                </div>
                                <div className="UV-artist-title">{friend.festival}
                                </div>
                            </li>)
                        })}
                    </ul>
                    :
                    null
                }
            </div>
            </div>
    
            
           
        );
    }
}

export default UserViewMatches;